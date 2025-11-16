// ER Diyagramı Oluşturucu Uygulaması
(function() {
    'use strict';

    // Uygulama Durumu
const state = {
        shapes: [],
        connections: [],
        selectedShape: null,
        connectMode: false,
        connectStart: null,
        deleteMode: false,
        currentScenario: null,
        shapeIdCounter: 0,
        connectionIdCounter: 0,
        draggedTool: null,
        currentTheme: 'light',
        editingShape: null,
        selectedIds: new Set(),
        clipboardData: null,
        editingConnection: null,
        pendingConnection: null,
        pendingRelationshipShape: null,
        pendingSecondConnection: null,
        pendingRelSetup: null,
        toastTimeout: null,
        shareLocked: false,
        blockPreviewUpdate: false,
        selectionBox: null,
        selectionStart: null,
        zoomLevel: 1,
        autoSaveTimer: null
};

    const cardinalityPresets = {
        '1:1': { first: '1', second: '1' },
        '1:N': { first: '1', second: 'N' },
        'N:1': { first: 'N', second: '1' },
        'M:N': { first: 'M', second: 'N' },
        'N:M': { first: 'N', second: 'M' },
        '0..1:1': { first: '0..1', second: '1' },
        '1:0..1': { first: '1', second: '0..1' }
    };

    // DOM Elemanları (init'te doldurulacak)
    let elements = {};

    function isRelationshipShape(shape) {
        if (!shape) return false;
        return shape.type === 'relationship' || shape.type === 'identifying-rel';
    }

    function getShapeById(id) {
        return state.shapes.find(shape => shape.id === id);
    }

    function setCardinalityForShape(connection, shapeId, value) {
        if (connection.from === shapeId) {
            connection.fromCardinality = value;
        } else if (connection.to === shapeId) {
            connection.toCardinality = value;
        }
    }

    function getCardinalityForShape(connection, shapeId) {
        if (connection.from === shapeId) {
            return connection.fromCardinality;
        }
        if (connection.to === shapeId) {
            return connection.toCardinality;
        }
        return '';
    }

    // Tema Yönetimi
    function loadTheme() {
        const savedTheme = localStorage.getItem('sql-learning-theme');
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            elements.themeIcon.innerHTML = '&#9788;';
            elements.themeText.textContent = 'Açık Tema';
            state.currentTheme = 'dark';
        } else {
            document.documentElement.removeAttribute('data-theme');
            elements.themeIcon.innerHTML = '&#9790;';
            elements.themeText.textContent = 'Koyu Tema';
            state.currentTheme = 'light';
        }
    }

    function toggleTheme() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            elements.themeIcon.innerHTML = '&#9790;';
            elements.themeText.textContent = 'Koyu Tema';
            localStorage.setItem('sql-learning-theme', 'light');
            state.currentTheme = 'light';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            elements.themeIcon.innerHTML = '&#9788;';
            elements.themeText.textContent = 'Açık Tema';
            localStorage.setItem('sql-learning-theme', 'dark');
            state.currentTheme = 'dark';
        }
    }

    // Şekil SVG'lerini oluştur
    function getShapeSVG(type, width = 120, height = 60) {
        const svgMap = {
            'entity': `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
                <rect x="2" y="2" width="${width-4}" height="${height-4}" fill="var(--bg-secondary)" stroke="var(--accent-color)" stroke-width="2"/>
            </svg>`,
            'weak-entity': `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
                <rect x="2" y="2" width="${width-4}" height="${height-4}" fill="var(--bg-secondary)" stroke="var(--accent-color)" stroke-width="2"/>
                <rect x="6" y="6" width="${width-12}" height="${height-12}" fill="none" stroke="var(--accent-color)" stroke-width="2"/>
            </svg>`,
            'attribute': `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
                <ellipse cx="${width/2}" cy="${height/2}" rx="${width/2-4}" ry="${height/2-4}" fill="var(--bg-secondary)" stroke="var(--accent-color)" stroke-width="2"/>
            </svg>`,
            'key-attribute': `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
                <ellipse cx="${width/2}" cy="${height/2}" rx="${width/2-4}" ry="${height/2-4}" fill="var(--bg-secondary)" stroke="var(--accent-color)" stroke-width="2"/>
                <line x1="10" y1="${height/2+5}" x2="${width-10}" y2="${height/2+5}" stroke="var(--accent-color)" stroke-width="2"/>
            </svg>`,
            'multivalued': `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
                <ellipse cx="${width/2}" cy="${height/2}" rx="${width/2-4}" ry="${height/2-4}" fill="var(--bg-secondary)" stroke="var(--accent-color)" stroke-width="2"/>
                <ellipse cx="${width/2}" cy="${height/2}" rx="${width/2-10}" ry="${height/2-10}" fill="none" stroke="var(--accent-color)" stroke-width="2"/>
            </svg>`,
            'derived': `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
                <ellipse cx="${width/2}" cy="${height/2}" rx="${width/2-4}" ry="${height/2-4}" fill="var(--bg-secondary)" stroke="var(--accent-color)" stroke-width="2" stroke-dasharray="6,4"/>
            </svg>`,
            'relationship': `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
                <polygon points="${width/2},4 ${width-4},${height/2} ${width/2},${height-4} 4,${height/2}" fill="var(--bg-secondary)" stroke="var(--accent-color)" stroke-width="2"/>
            </svg>`,
            'identifying-rel': `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
                <polygon points="${width/2},4 ${width-4},${height/2} ${width/2},${height-4} 4,${height/2}" fill="var(--bg-secondary)" stroke="var(--accent-color)" stroke-width="2"/>
                <polygon points="${width/2},10 ${width-12},${height/2} ${width/2},${height-10} 12,${height/2}" fill="none" stroke="var(--accent-color)" stroke-width="2"/>
            </svg>`
        };
        return svgMap[type] || svgMap['entity'];
    }

    // Şekil Oluştur
    function createShape(type, x, y, label = '') {
        const id = `shape-${state.shapeIdCounter++}`;
        const shape = {
            id: id,
            type: type,
            x: x,
            y: y,
            width: 120,
            height: 60,
            label: label
        };

        state.shapes.push(shape);
        renderShape(shape);
        updateElementCount();
        updateSharePreview();
        return shape;
    }

    // Şekli Render Et
    function renderShape(shape) {
        const div = document.createElement('div');
        div.id = shape.id;
        div.className = 'er-shape';
        div.setAttribute('data-type', shape.type);
        div.style.left = shape.x + 'px';
        div.style.top = shape.y + 'px';
        div.innerHTML = getShapeSVG(shape.type, shape.width, shape.height);

        const labelSpan = document.createElement('span');
        labelSpan.className = 'shape-label';
        labelSpan.textContent = shape.label;
        div.appendChild(labelSpan);

        // Şekil olayları
        div.addEventListener('mousedown', (e) => onShapeMouseDown(e, shape));
        div.addEventListener('dblclick', () => openEditModal(shape));

        elements.shapesContainer.appendChild(div);
    }

    // Şekil Mouse Down
    function onShapeMouseDown(e, shape) {
        e.preventDefault();

        if (state.deleteMode) {
            deleteShape(shape);
            return;
        }

        if (state.connectMode) {
            handleConnection(shape);
            return;
        }

        const alreadySelected = state.selectedIds.has(shape.id);
        if (e.ctrlKey || e.metaKey) {
            if (alreadySelected) {
                if (state.selectedIds.size > 1) {
                    deselectShapeById(shape.id);
                }
            } else {
                selectShape(shape, true);
            }
        } else if (!alreadySelected) {
            selectShape(shape);
        }
        startDrag(e, shape);
    }

    function clearSelection() {
        state.selectedIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.remove('selected');
        });
        state.selectedIds.clear();
        state.selectedShape = null;
    }

    function selectShape(shape, additive = false) {
        if (!shape) return;
        if (!additive) {
            clearSelection();
        }
        if (!state.selectedIds.has(shape.id)) {
            state.selectedIds.add(shape.id);
            const el = document.getElementById(shape.id);
            if (el) el.classList.add('selected');
        }
        state.selectedShape = shape;
    }

    function deselectShapeById(id) {
        if (state.selectedIds.has(id)) {
            state.selectedIds.delete(id);
            const el = document.getElementById(id);
            if (el) el.classList.remove('selected');
        }
        if (state.selectedShape && state.selectedShape.id === id) {
            state.selectedShape = null;
        }
    }

    function getSelectedShapes() {
        return state.shapes.filter(shape => state.selectedIds.has(shape.id));
    }

    function selectAllShapes() {
        clearSelection();
        state.shapes.forEach(shape => {
            state.selectedIds.add(shape.id);
            const el = document.getElementById(shape.id);
            if (el) el.classList.add('selected');
        });
        state.selectedShape = state.shapes[state.shapes.length - 1] || null;
    }

    // Sürükleme Başlat
    function startDrag(e, shape) {
        const startX = e.clientX;
        const startY = e.clientY;
        let dragTargets = [];
        if (state.selectedIds.has(shape.id)) {
            dragTargets = getSelectedShapes();
        } else {
            dragTargets = [shape];
            selectShape(shape);
        }
        const startPositions = dragTargets.map(item => ({
            shape: item,
            x: item.x,
            y: item.y
        }));

        const gridSize = 10; // Grid boyutu (px)

        function onMouseMove(ev) {
            let dx = ev.clientX - startX;
            let dy = ev.clientY - startY;

            // Shift tuşuna basılıysa grid'e yapıştır
            if (ev.shiftKey) {
                dx = Math.round(dx / gridSize) * gridSize;
                dy = Math.round(dy / gridSize) * gridSize;
            }

            startPositions.forEach(entry => {
                let newX = entry.x + dx;
                let newY = entry.y + dy;

                // Shift ile grid snap
                if (ev.shiftKey) {
                    newX = Math.round(newX / gridSize) * gridSize;
                    newY = Math.round(newY / gridSize) * gridSize;
                }

                entry.shape.x = newX;
                entry.shape.y = newY;
                const el = document.getElementById(entry.shape.id);
                if (el) {
                    el.style.left = entry.shape.x + 'px';
                    el.style.top = entry.shape.y + 'px';
                }
            });
            updateConnections();
        }

        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            updateSharePreview();
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }

    // Bağlantı İşle
    function handleConnection(shape) {
        if (!state.connectStart) {
            state.connectStart = shape;
            elements.modeIndicator.textContent = `Mod: Bağlantı - ${shape.label || shape.type} seçildi`;
        } else {
            if (state.connectStart.id !== shape.id) {
                const fromShape = state.connectStart;
                const toShape = shape;
                const fromRel = isRelationshipShape(fromShape);
                const toRel = isRelationshipShape(toShape);

                // İki entity birbirine bağlanıyorsa, ortaya otomatik diamond koy
                if (!fromRel && !toRel) {
                    // Ortadaki koordinatları hesapla
                    const midX = (fromShape.x + fromShape.width / 2 + toShape.x + toShape.width / 2) / 2 - 60;
                    const midY = (fromShape.y + fromShape.height / 2 + toShape.y + toShape.height / 2) / 2 - 30;

                    // Diamond (ilişki) şekli oluştur
                    const relationshipShape = createShape('relationship', midX, midY, '');

                    // İlk bağlantı: Entity1 → Relationship
                    const conn1 = createConnection(fromShape, relationshipShape);
                    // İkinci bağlantı: Relationship → Entity2
                    const conn2 = createConnection(relationshipShape, toShape);

                    // Bağlantı modunu kapat
                    setConnectMode(false);

                    // Tek modal ile tüm ilişki bilgilerini sor
                    openRelationshipSetupModal(fromShape, toShape, relationshipShape, conn1, conn2);
                } else {
                    // Normal bağlantı (en az bir taraf relationship ise)
                    const newConnection = createConnection(fromShape, toShape);
                    openConnectionModal(newConnection, true);
                }
            }
            state.connectStart = null;
            elements.modeIndicator.textContent = 'Mod: Bağlantı Çiz';
        }
    }

    // Bağlantı Oluştur
    function createConnection(from, to, options = {}) {
        const connOptions = options || {};
        const conn = {
            id: `conn-${state.connectionIdCounter++}`,
            from: from.id,
            to: to.id,
            fromCardinality: connOptions.fromCardinality || '',
            toCardinality: connOptions.toCardinality || '',
            label: connOptions.label || ''
        };

        state.connections.push(conn);
        renderConnection(conn);
        updateElementCount();
        updateSharePreview();
        return conn;
    }

    // Bağlantıyı Render Et
    function renderConnection(conn) {
        const fromShape = state.shapes.find(s => s.id === conn.from);
        const toShape = state.shapes.find(s => s.id === conn.to);

        if (!fromShape || !toShape) return;

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('id', conn.id);
        line.setAttribute('class', 'connection-line');
        line.addEventListener('click', (e) => {
            e.stopPropagation();
            if (state.deleteMode) {
                deleteConnection(conn.id);
            } else {
                openConnectionModal(conn);
            }
        });

        elements.connectionsSvg.appendChild(line);
        updateConnectionGraphics(conn);
    }

    // Bağlantıları Güncelle
    function updateConnections() {
        state.connections.forEach(conn => {
            updateConnectionGraphics(conn);
        });
    }

    // Şekil Sil
    function deleteShape(shape) {
        // İlgili bağlantıları sil
        state.connections = state.connections.filter(conn => {
            if (conn.from === shape.id || conn.to === shape.id) {
                removeConnectionGraphics(conn);
                return false;
            }
            return true;
        });

        // Şekli sil
        state.shapes = state.shapes.filter(s => s.id !== shape.id);
        const el = document.getElementById(shape.id);
        if (el) el.remove();

        if (state.selectedShape && state.selectedShape.id === shape.id) {
            state.selectedShape = null;
        }
        state.selectedIds.delete(shape.id);

        updateElementCount();
        updateSharePreview();
    }

    function deleteConnection(connectionId) {
        const index = state.connections.findIndex(conn => conn.id === connectionId);
        if (index === -1) return;
        const [conn] = state.connections.splice(index, 1);
        removeConnectionGraphics(conn);
        updateElementCount();
        updateSharePreview();
        showToast('Bağlantı silindi.', 'info');
        if (state.editingConnection && state.editingConnection.id === connectionId) {
            closeConnectionModal();
        }
        if (state.pendingConnection && state.pendingConnection.id === connectionId) {
            state.pendingConnection = null;
        }
    }

    // Kopyala / Yapıştır
    function copySelection() {
        const selected = getSelectedShapes();
        if (!selected.length) {
            showToast('Önce bir şekil seçmelisiniz.', 'warning');
            return;
        }
        const ids = new Set(selected.map(shape => shape.id));
        const shapesData = selected.map(shape => ({
            id: shape.id,
            type: shape.type,
            x: shape.x,
            y: shape.y,
            label: shape.label,
            width: shape.width,
            height: shape.height
        }));
        const connectionsData = state.connections
            .filter(conn => ids.has(conn.from) && ids.has(conn.to))
            .map(conn => ({
                from: conn.from,
                to: conn.to,
                fromCardinality: conn.fromCardinality,
                toCardinality: conn.toCardinality,
                label: conn.label
            }));
        state.clipboardData = { shapes: shapesData, connections: connectionsData };
        showToast(selected.length > 1 ? 'Seçili şekiller kopyalandı.' : 'Şekil kopyalandı.', 'success');
    }

    function pasteClipboard() {
        if (!state.clipboardData || !state.clipboardData.shapes.length) {
            showToast('Henüz kopyalanmış bir şekil yok.', 'warning');
            return;
        }
        const offset = 30;
        const idMap = {};
        const newShapes = [];
        state.clipboardData.shapes.forEach(data => {
            const newShape = createShape(
                data.type,
                data.x + offset,
                data.y + offset,
                data.label
            );
            newShapes.push(newShape);
            idMap[data.id] = newShape;
        });
        state.clipboardData.connections.forEach(conn => {
            const fromShape = idMap[conn.from];
            const toShape = idMap[conn.to];
            if (fromShape && toShape) {
                createConnection(fromShape, toShape, {
                    fromCardinality: conn.fromCardinality,
                    toCardinality: conn.toCardinality,
                    label: conn.label
                });
            }
        });
        clearSelection();
        newShapes.forEach(shape => selectShape(shape, true));
        showToast('Kopyalanan şekiller yapıştırıldı.', 'info');
    }

    function duplicateSelection() {
        if (!getSelectedShapes().length) {
            showToast('Önce kopyalanacak şekilleri seçin.', 'warning');
            return;
        }
        copySelection();
        pasteClipboard();
    }

    function deleteSelection() {
        const selected = getSelectedShapes();
        if (!selected.length) {
            showToast('Önce silinecek şekilleri seçin.', 'warning');
            return;
        }
        selected.forEach(shape => deleteShape(shape));
        showToast('Seçili şekiller silindi.', 'info');
    }

    function handleKeydown(e) {
        const isCtrl = e.ctrlKey || e.metaKey;
        const activeTag = document.activeElement ? document.activeElement.tagName : '';
        const isTyping = activeTag === 'INPUT' || activeTag === 'TEXTAREA';

        if (e.key === 'Escape') {
            if (elements.connectionModal.style.display !== 'none') {
                e.preventDefault();
                closeConnectionModal(Boolean(state.pendingConnection));
                return;
            }
            if (elements.editModal.style.display !== 'none') {
                e.preventDefault();
                closeEditModal();
                return;
            }
            if (state.connectMode || state.deleteMode) {
                setConnectMode(false);
                setDeleteMode(false);
                return;
            }
        }

        if (isCtrl && e.key.toLowerCase() === 'a' && !isTyping) {
            e.preventDefault();
            selectAllShapes();
        } else if (isCtrl && e.key.toLowerCase() === 'c' && !isTyping) {
            e.preventDefault();
            copySelection();
        } else if (isCtrl && e.key.toLowerCase() === 'v' && !isTyping) {
            e.preventDefault();
            pasteClipboard();
        } else if (isCtrl && e.key.toLowerCase() === 'd' && !isTyping) {
            e.preventDefault();
            duplicateSelection();
        } else if (e.key === 'Delete' && !isTyping) {
            e.preventDefault();
            deleteSelection();
        }
    }

    function updateConnectionGraphics(conn) {
        const fromShape = getShapeById(conn.from);
        const toShape = getShapeById(conn.to);
        if (!fromShape || !toShape) return;

        const line = document.getElementById(conn.id);
        const startPoint = {
            x: fromShape.x + fromShape.width / 2,
            y: fromShape.y + fromShape.height / 2
        };
        const endPoint = {
            x: toShape.x + toShape.width / 2,
            y: toShape.y + toShape.height / 2
        };

        if (line) {
            line.setAttribute('x1', startPoint.x);
            line.setAttribute('y1', startPoint.y);
            line.setAttribute('x2', endPoint.x);
            line.setAttribute('y2', endPoint.y);
        }

        ['-fromCard', '-toCard', '-entityCard', '-desc'].forEach(suffix => {
            const node = document.getElementById(conn.id + suffix);
            if (node) node.remove();
        });

        const fromRel = isRelationshipShape(fromShape);
        const toRel = isRelationshipShape(toShape);

        if ((fromRel && !toRel) || (!fromRel && toRel)) {
            const entityShape = fromRel ? toShape : fromShape;
            const relationshipShape = fromRel ? fromShape : toShape;
            const entityValue = getCardinalityForShape(conn, entityShape.id);
            const midpoint = getSegmentMidpoint(entityShape, relationshipShape);
            const node = updateCardinalityNode(conn.id + '-entityCard', entityValue);
            if (node) {
                node.setAttribute('x', midpoint.x);
                node.setAttribute('y', midpoint.y);
            }
        } else {
            const offsets = calculateLabelOffsets(fromShape, toShape);
            const fromLabel = updateCardinalityNode(conn.id + '-fromCard', conn.fromCardinality);
            if (fromLabel) {
                fromLabel.setAttribute('x', offsets.from.x);
                fromLabel.setAttribute('y', offsets.from.y);
            }
            const toLabel = updateCardinalityNode(conn.id + '-toCard', conn.toCardinality);
            if (toLabel) {
                toLabel.setAttribute('x', offsets.to.x);
                toLabel.setAttribute('y', offsets.to.y);
            }
        }

        const descLabel = updateCardinalityNode(conn.id + '-desc', conn.label);
        if (descLabel) {
            const mid = getSegmentMidpoint(fromShape, toShape);
            descLabel.setAttribute('x', mid.x);
            descLabel.setAttribute('y', mid.y - 8);
        }
    }

    function calculateLabelOffsets(fromShape, toShape) {
        const start = {
            x: fromShape.x + fromShape.width / 2,
            y: fromShape.y + fromShape.height / 2
        };
        const end = {
            x: toShape.x + toShape.width / 2,
            y: toShape.y + toShape.height / 2
        };
        // Etiketleri çizginin 1/3 ve 2/3 noktalarına yerleştir (çizgi ortasına yakın)
        const fromOffset = {
            x: start.x + (end.x - start.x) * 0.33,
            y: start.y + (end.y - start.y) * 0.33
        };
        const toOffset = {
            x: start.x + (end.x - start.x) * 0.67,
            y: start.y + (end.y - start.y) * 0.67
        };
        return {
            from: fromOffset,
            to: toOffset,
            mid: {
                x: (start.x + end.x) / 2,
                y: (start.y + end.y) / 2 - 8
            }
        };
    }

    function getSegmentMidpoint(shapeA, shapeB) {
        return {
            x: (shapeA.x + shapeA.width / 2 + shapeB.x + shapeB.width / 2) / 2,
            y: (shapeA.y + shapeA.height / 2 + shapeB.y + shapeB.height / 2) / 2
        };
    }

    function updateCardinalityNode(id, text) {
        let node = document.getElementById(id);
        if (!text) {
            if (node) node.remove();
            return null;
        }
        if (!node) {
            node = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            node.setAttribute('id', id);
            node.setAttribute('class', 'cardinality-label');
            node.setAttribute('text-anchor', 'middle');
            node.setAttribute('dominant-baseline', 'middle');
            elements.connectionsSvg.appendChild(node);
        }
        node.textContent = text;
        return node;
    }

    function removeConnectionGraphics(conn) {
        const lineEl = document.getElementById(conn.id);
        if (lineEl) lineEl.remove();
        ['-fromCard', '-toCard', '-entityCard', '-desc'].forEach(suffix => {
            const labelEl = document.getElementById(conn.id + suffix);
            if (labelEl) labelEl.remove();
        });
    }

    function getPresetKey(fromValue, toValue) {
        if (!fromValue || !toValue) return '';
        const entry = Object.entries(cardinalityPresets).find(([key, val]) => {
            return val.first === fromValue && val.second === toValue;
        });
        return entry ? entry[0] : '';
    }

    function applyPresetSelection(code) {
        if (!state.editingConnection || !code) return;
        const preset = cardinalityPresets[code];
        if (!preset) return;

        const conn = state.editingConnection;
        const fromShape = getShapeById(conn.from);
        const toShape = getShapeById(conn.to);
        const fromRel = isRelationshipShape(fromShape);
        const toRel = isRelationshipShape(toShape);
        const primaryValue = preset.first;
        const secondaryValue = preset.second;

        // Entity-Entity bağlantısı: İki uca da uygula
        if (!fromRel && !toRel) {
            conn.fromCardinality = primaryValue;
            conn.toCardinality = secondaryValue;
            if (elements.connectionFromCardinality) {
                elements.connectionFromCardinality.value = primaryValue;
            }
            if (elements.connectionToCardinality) {
                elements.connectionToCardinality.value = secondaryValue;
            }
        }
        // Entity-Relationship bağlantısı: Sadece entity ucuna primary uygula
        else if ((fromRel && !toRel) || (!fromRel && toRel)) {
            const entityShapeId = fromRel ? toShape.id : fromShape.id;
            const relationshipId = fromRel ? fromShape.id : toShape.id;

            // Entity ucuna primary değeri yaz
            setCardinalityForShape(conn, entityShapeId, primaryValue);

            // İlişki ucunu boş bırak
            if (fromRel) {
                conn.fromCardinality = '';
                if (elements.connectionToCardinality) {
                    elements.connectionToCardinality.value = primaryValue;
                }
            } else {
                conn.toCardinality = '';
                if (elements.connectionFromCardinality) {
                    elements.connectionFromCardinality.value = primaryValue;
                }
            }

            // Secondary değeri diğer entity bağlantısına uygula
            if (secondaryValue) {
                const others = state.connections.filter(c =>
                    c.id !== conn.id && (c.from === relationshipId || c.to === relationshipId)
                );
                if (others.length === 1) {
                    const otherConn = others[0];
                    const otherFromShape = getShapeById(otherConn.from);
                    const otherToShape = getShapeById(otherConn.to);
                    const otherEntityShape = isRelationshipShape(otherFromShape) ? otherToShape : otherFromShape;
                    if (otherEntityShape && !isRelationshipShape(otherEntityShape)) {
                        setCardinalityForShape(otherConn, otherEntityShape.id, secondaryValue);
                        updateConnectionGraphics(otherConn);
                        showToast(`Kardinalite uygulandı: ${primaryValue} ve ${secondaryValue}`, 'success');
                    }
                } else if (others.length === 0) {
                    showToast('İlişkiye bağlı başka varlık yok, lütfen önce bağlantı oluşturun.', 'warning');
                } else {
                    showToast('İlişkinin birden fazla bağlantısı var, lütfen kardinaliteleri ayrı ayarlayın.', 'warning');
                }
            }
        }
        // Relationship-Relationship bağlantısı (nadir): Her iki ucu da boş bırak
        else {
            conn.fromCardinality = '';
            conn.toCardinality = '';
        }

        updateConnectionGraphics(conn);
        updateSharePreview();
    }

    // Tümünü Temizle
    function clearCanvas(askConfirm = true) {
        if (askConfirm) {
            if (!confirm('Tüm öğeler silinecek. Emin misiniz?')) {
                return;
            }
        }
        clearSelection();
        state.shapes = [];
        state.connections = [];
        state.selectedShape = null;
        state.selectedIds.clear();
        if (state.selectionBox) {
            state.selectionBox.remove();
            state.selectionBox = null;
        }
        state.connectStart = null;
        state.clipboardData = null;
        state.pendingConnection = null;
        elements.shapesContainer.innerHTML = '';
        elements.connectionsSvg.innerHTML = '';
        state.shapeIdCounter = 0;
        state.connectionIdCounter = 0;
        updateElementCount();
        updateSharePreview();
    }

    // Öğe Sayısını Güncelle
    function updateElementCount() {
        elements.elementCount.textContent = `Öğe: ${state.shapes.length} | Bağlantı: ${state.connections.length}`;
    }

    // Modları Değiştir
    function setConnectMode(enabled) {
        state.connectMode = enabled;
        state.deleteMode = false;
        state.connectStart = null;
        elements.btnConnect.classList.toggle('active', enabled);
        elements.btnDelete.classList.remove('active');
        elements.modeIndicator.textContent = enabled ? 'Mod: Bağlantı Çiz' : 'Mod: Sürükle-Bırak';
    }

    function setDeleteMode(enabled) {
        state.deleteMode = enabled;
        state.connectMode = false;
        state.connectStart = null;
        elements.btnDelete.classList.toggle('active', enabled);
        elements.btnConnect.classList.remove('active');
        elements.modeIndicator.textContent = enabled ? 'Mod: Silme' : 'Mod: Sürükle-Bırak';
    }

    // Düzenleme Modalı
    function openEditModal(shape) {
        state.editingShape = shape;
        elements.shapeLabel.value = shape.label;

        elements.editModal.style.display = 'flex';
        elements.shapeLabel.focus();
    }

    function closeEditModal() {
        state.editingShape = null;
        elements.editModal.style.display = 'none';
    }

    function saveLabel() {
        if (state.editingShape) {
            state.editingShape.label = elements.shapeLabel.value;
            const labelEl = document.querySelector(`#${state.editingShape.id} .shape-label`);
            if (labelEl) {
                labelEl.textContent = state.editingShape.label;
            }
        }
        closeEditModal();
        updateSharePreview();
    }

    // Yeni İlişki Kurulum Modalı
    function openRelationshipSetupModal(entity1, entity2, relShape, conn1, conn2) {
        state.pendingRelSetup = { entity1, entity2, relShape, conn1, conn2 };

        const label1 = entity1.label || entity1.type;
        const label2 = entity2.label || entity2.type;

        if (elements.relSetupDesc) {
            elements.relSetupDesc.textContent = `${label1} ↔ ${label2}`;
        }
        if (elements.relName) {
            elements.relName.value = '';
        }
        if (elements.relCardinality) {
            elements.relCardinality.value = '1:N';
        }

        elements.relSetupModal.style.display = 'flex';
        if (elements.relName) {
            elements.relName.focus();
        }
    }

    function saveRelationshipSetup() {
        if (!state.pendingRelSetup) return;

        const { entity1, entity2, relShape, conn1, conn2 } = state.pendingRelSetup;
        const relName = elements.relName ? elements.relName.value.trim() : '';
        const cardinalityCode = elements.relCardinality ? elements.relCardinality.value : '1:N';

        // İlişki adını kaydet
        relShape.label = relName;
        const labelEl = document.querySelector(`#${relShape.id} .shape-label`);
        if (labelEl) {
            labelEl.textContent = relName;
        }

        // Kardinaliteyi uygula
        const preset = cardinalityPresets[cardinalityCode];
        if (preset) {
            // Entity1 tarafına first değeri
            setCardinalityForShape(conn1, entity1.id, preset.first);
            // Entity2 tarafına second değeri
            setCardinalityForShape(conn2, entity2.id, preset.second);
        }

        updateConnectionGraphics(conn1);
        updateConnectionGraphics(conn2);
        updateSharePreview();

        showToast(`İlişki "${relName || 'İsimsiz'}" (${cardinalityCode}) oluşturuldu.`, 'success');

        closeRelationshipSetupModal();
    }

    function closeRelationshipSetupModal(cancel = false) {
        elements.relSetupModal.style.display = 'none';

        if (cancel && state.pendingRelSetup) {
            // İptal edilirse oluşturulan şekil ve bağlantıları sil
            const { relShape, conn1, conn2 } = state.pendingRelSetup;
            deleteConnection(conn1.id);
            deleteConnection(conn2.id);
            deleteShape(relShape);
        }

        state.pendingRelSetup = null;
    }

    // Bağlantı Modalı
    function openConnectionModal(connection, isNew = false) {
        state.editingConnection = connection;
        state.pendingConnection = isNew ? connection : null;
        const fromShape = getShapeById(connection.from);
        const toShape = getShapeById(connection.to);
        const fromLabel = fromShape ? (fromShape.label || fromShape.type) : 'Öğe';
        const toLabel = toShape ? (toShape.label || toShape.type) : 'Öğe';
        const fromRel = isRelationshipShape(fromShape);
        const toRel = isRelationshipShape(toShape);

        elements.connectionModalDesc.textContent = `${fromLabel} ↔ ${toLabel}`;

        if (elements.fromCardGroup) {
            elements.fromCardGroup.style.display = fromRel ? 'none' : 'block';
        }
        if (elements.toCardGroup) {
            elements.toCardGroup.style.display = toRel ? 'none' : 'block';
        }

        if (elements.connectionFromCardinality) {
            elements.connectionFromCardinality.value = fromRel ? '' : (connection.fromCardinality || '');
            elements.connectionFromCardinality.disabled = fromRel;
        }
        if (elements.connectionToCardinality) {
            elements.connectionToCardinality.value = toRel ? '' : (connection.toCardinality || '');
            elements.connectionToCardinality.disabled = toRel;
        }
        elements.connectionLabel.value = connection.label || '';
        if (elements.connectionPreset) {
            elements.connectionPreset.value = (!fromRel && !toRel) ? getPresetKey(connection.fromCardinality, connection.toCardinality) : '';
        }
        elements.connectionModal.style.display = 'flex';
        const focusTarget = (!fromRel && elements.connectionFromCardinality)
            ? elements.connectionFromCardinality
            : (!toRel && elements.connectionToCardinality) ? elements.connectionToCardinality : elements.connectionLabel;
        if (focusTarget) {
            focusTarget.focus();
        }
    }

    function closeConnectionModal(removePending = false) {
        elements.connectionModal.style.display = 'none';
        if (elements.connectionPreset) {
            elements.connectionPreset.value = '';
        }
        if (removePending && state.pendingConnection) {
            deleteConnection(state.pendingConnection.id);
        }
        state.pendingConnection = null;
        state.editingConnection = null;
    }

    function saveConnectionDetails() {
        if (!state.editingConnection) return;
        const conn = state.editingConnection;
        const fromShape = getShapeById(conn.from);
        const toShape = getShapeById(conn.to);
        const fromRel = isRelationshipShape(fromShape);
        const toRel = isRelationshipShape(toShape);

        if (!fromRel && elements.connectionFromCardinality) {
            conn.fromCardinality = elements.connectionFromCardinality.value;
        } else if (fromRel) {
            conn.fromCardinality = '';
        }
        if (!toRel && elements.connectionToCardinality) {
            conn.toCardinality = elements.connectionToCardinality.value;
        } else if (toRel) {
            conn.toCardinality = '';
        }
        conn.label = elements.connectionLabel.value.trim();
        updateConnectionGraphics(conn);
        updateSharePreview();

        // Eğer ikinci bağlantı bekleniyorsa, onu aç
        if (state.pendingSecondConnection) {
            const secondConn = state.pendingSecondConnection;
            state.pendingSecondConnection = null;
            elements.connectionModal.style.display = 'none';
            state.editingConnection = null;
            state.pendingConnection = null;
            // İkinci bağlantı için modal aç
            setTimeout(() => {
                openConnectionModal(secondConn, false);
            }, 100);
        }
        // Eğer baklava adı bekleniyorsa, onu aç
        else if (state.pendingRelationshipShape) {
            const relShape = state.pendingRelationshipShape;
            state.pendingRelationshipShape = null;
            elements.connectionModal.style.display = 'none';
            state.editingConnection = null;
            state.pendingConnection = null;
            // Baklava adı için modal aç
            setTimeout(() => {
                openEditModal(relShape);
            }, 100);
            showToast('Şimdi ilişki adını girin.', 'info');
        } else {
            showToast('Bağlantı bilgileri güncellendi.', 'success');
            closeConnectionModal();
        }
    }

    // Senaryo Yönetimi
    function loadScenario(scenarioId) {
        if (!scenarioId) {
            elements.scenarioDescription.innerHTML = '<p class="placeholder-text">Bir senaryo seçerek başlayın.</p>';
            elements.scenarioRequirements.style.display = 'none';
            elements.btnCheckScenario.disabled = true;
            state.currentScenario = null;
            return;
        }

        const scenario = ER_SCENARIOS[scenarioId];
        if (!scenario) return;

        state.currentScenario = scenario;

        elements.scenarioDescription.innerHTML = `<p>${scenario.description}</p>`;

        let reqHtml = '';
        scenario.requirements.forEach(req => {
            reqHtml += `<li id="req-${req.id}">${req.text}</li>`;
        });
        elements.requirementsList.innerHTML = reqHtml;
        elements.scenarioRequirements.style.display = 'block';

        elements.btnCheckScenario.disabled = false;
        elements.scenarioFeedback.style.display = 'none';
    }

    // Senaryo Kontrolü
    function checkScenario() {
        if (!state.currentScenario) return;

        let completedCount = 0;
        const totalReqs = state.currentScenario.requirements.length;

        state.currentScenario.requirements.forEach(req => {
            const completed = checkRequirement(req);
            const reqEl = document.getElementById(`req-${req.id}`);

            if (completed) {
                reqEl.classList.add('completed');
                completedCount++;
            } else {
                reqEl.classList.remove('completed');
            }
        });

        // Geri bildirim
        let feedbackClass = '';
        let feedbackText = '';

        if (completedCount === totalReqs) {
            feedbackClass = 'success';
            feedbackText = `Tebrikler! Tüm gereksinimleri karşıladınız. (${completedCount}/${totalReqs})`;
        } else if (completedCount > totalReqs / 2) {
            feedbackClass = 'partial';
            feedbackText = `İyi gidiyorsunuz! ${completedCount}/${totalReqs} gereksinim tamamlandı. Eksik bağlantıları tamamlayın.`;
        } else {
            feedbackClass = 'error';
            feedbackText = `${completedCount}/${totalReqs} gereksinim tamamlandı. Gereksinim listesini gözden geçirin.`;
        }

        elements.scenarioFeedback.className = `scenario-feedback ${feedbackClass}`;
        elements.scenarioFeedback.textContent = feedbackText;
        elements.scenarioFeedback.style.display = 'block';
    }

    function showToast(message, type = 'info') {
        if (!elements.toast) return;
        elements.toast.textContent = message;
        elements.toast.className = `builder-toast show ${type}`;
        if (state.toastTimeout) {
            clearTimeout(state.toastTimeout);
        }
        state.toastTimeout = setTimeout(() => {
            elements.toast.classList.remove('show');
        }, 2600);
    }

    function getDiagramData() {
        return {
            shapes: state.shapes.map(shape => ({
                id: shape.id,
                type: shape.type,
                x: shape.x,
                y: shape.y,
                label: shape.label
            })),
            connections: state.connections.map(conn => ({
                id: conn.id,
                from: conn.from,
                to: conn.to,
                fromCardinality: conn.fromCardinality,
                toCardinality: conn.toCardinality,
                label: conn.label
            })),
            scenario: state.currentScenario ? state.currentScenario.id : ''
        };
    }

    function updateSharePreview() {
        if (!elements.shareCode || state.shareLocked) return;
        try {
            elements.shareCode.value = JSON.stringify(getDiagramData(), null, 2);
            scheduleAutoSave();
        } catch (error) {
            console.error('Ön izleme güncellenemedi:', error);
        }
    }

    function exportDiagramJSON() {
        const data = JSON.stringify(getDiagramData(), null, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'er-diyagram.json';
        link.click();
        URL.revokeObjectURL(url);
        showToast('JSON dosyası indirildi.', 'success');
    }

    async function copyDiagramJSON() {
        const data = JSON.stringify(getDiagramData(), null, 2);
        try {
            await navigator.clipboard.writeText(data);
            showToast('Diyagram JSON olarak panoya kopyalandı.', 'success');
        } catch (error) {
            console.error(error);
            showToast('Panoya kopyalanamadı.', 'error');
        }
    }

    function promptImportJSON() {
        if (elements.importInput) {
            elements.importInput.value = '';
            elements.importInput.click();
        }
    }

    function handleImportFile(event) {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(loadEvent) {
            try {
                const data = JSON.parse(loadEvent.target.result);
                loadDiagramData(data);
            } catch (error) {
                console.error(error);
                showToast('JSON dosyası okunamadı.', 'error');
            }
        };
        reader.readAsText(file);
    }

    function importDiagramFromText() {
        if (!elements.shareCode) return;
        const text = elements.shareCode.value.trim();
        if (!text) {
            showToast('Yüklenecek JSON verisi bulunamadı.', 'warning');
            return;
        }
        try {
            const data = JSON.parse(text);
            loadDiagramData(data);
        } catch (error) {
            console.error(error);
            showToast('Geçersiz JSON verisi.', 'error');
        } finally {
            state.blockPreviewUpdate = false;
        }
    }

    function loadDiagramData(data) {
        clearCanvas(false);
        const idMap = {};

        (data.shapes || []).forEach(shapeData => {
            const newShape = createShape(
                shapeData.type || 'entity',
                Number(shapeData.x) || 0,
                Number(shapeData.y) || 0,
                shapeData.label || ''
            );
            idMap[shapeData.id] = newShape.id;
        });

        (data.connections || []).forEach(connData => {
            const fromId = idMap[connData.from] || connData.from;
            const toId = idMap[connData.to] || connData.to;
            const fromShape = state.shapes.find(s => s.id === fromId);
            const toShape = state.shapes.find(s => s.id === toId);
            if (fromShape && toShape) {
                createConnection(fromShape, toShape, {
                    fromCardinality: connData.fromCardinality,
                    toCardinality: connData.toCardinality,
                    label: connData.label
                });
            }
        });

        if (data.scenario && ER_SCENARIOS[data.scenario]) {
            elements.scenarioSelect.value = data.scenario;
            loadScenario(data.scenario);
        }

        updateElementCount();
        state.shareLocked = false;
        state.blockPreviewUpdate = false;
        updateSharePreview();
        showToast('Diyagram yüklendi.', 'success');
    }

    async function exportDiagramPNG() {
        if (typeof html2canvas === 'undefined') {
            showToast('PNG çıktısı için gerekli kütüphane yüklenemedi.', 'error');
            return;
        }
        showToast('PNG oluşturuluyor...', 'info');
        try {
            const canvas = await html2canvas(elements.canvasArea, {
                backgroundColor: state.currentTheme === 'dark' ? '#1a1a1a' : '#ffffff',
                scale: 2,
                useCORS: true
            });
            const link = document.createElement('a');
            link.download = 'er-diyagram.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
            showToast('PNG indirildi.', 'success');
        } catch (error) {
            console.error(error);
            showToast('PNG oluşturulamadı.', 'error');
        }
    }

    // SVG Export
    function exportDiagramSVG() {
        const canvasRect = elements.canvasArea.getBoundingClientRect();
        const width = canvasRect.width;
        const height = canvasRect.height;

        let svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
<style>
    text { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
</style>
<rect width="100%" height="100%" fill="${state.currentTheme === 'dark' ? '#1a1a1a' : '#ffffff'}"/>
`;

        // Bağlantı çizgilerini ekle
        state.connections.forEach(conn => {
            const fromShape = getShapeById(conn.from);
            const toShape = getShapeById(conn.to);
            if (!fromShape || !toShape) return;

            const x1 = fromShape.x + fromShape.width / 2;
            const y1 = fromShape.y + fromShape.height / 2;
            const x2 = toShape.x + toShape.width / 2;
            const y2 = toShape.y + toShape.height / 2;

            svgContent += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#2c3e50" stroke-width="2"/>\n`;

            // Kardinalite etiketleri
            const fromRel = isRelationshipShape(fromShape);
            const toRel = isRelationshipShape(toShape);

            if ((fromRel && !toRel) || (!fromRel && toRel)) {
                const entityShape = fromRel ? toShape : fromShape;
                const entityValue = getCardinalityForShape(conn, entityShape.id);
                if (entityValue) {
                    const midX = (x1 + x2) / 2;
                    const midY = (y1 + y2) / 2;
                    svgContent += `<text x="${midX}" y="${midY}" text-anchor="middle" dominant-baseline="middle" font-size="14" font-weight="bold" fill="#1a1a1a">${entityValue}</text>\n`;
                }
            } else {
                if (conn.fromCardinality) {
                    const lx = x1 + (x2 - x1) * 0.33;
                    const ly = y1 + (y2 - y1) * 0.33;
                    svgContent += `<text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle" font-size="14" font-weight="bold" fill="#1a1a1a">${conn.fromCardinality}</text>\n`;
                }
                if (conn.toCardinality) {
                    const lx = x1 + (x2 - x1) * 0.67;
                    const ly = y1 + (y2 - y1) * 0.67;
                    svgContent += `<text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle" font-size="14" font-weight="bold" fill="#1a1a1a">${conn.toCardinality}</text>\n`;
                }
            }
        });

        // Şekilleri ekle
        state.shapes.forEach(shape => {
            const x = shape.x;
            const y = shape.y;
            const w = shape.width;
            const h = shape.height;

            if (shape.type === 'entity') {
                svgContent += `<rect x="${x + 2}" y="${y + 2}" width="${w - 4}" height="${h - 4}" fill="#ffffff" stroke="#2c3e50" stroke-width="2"/>\n`;
            } else if (shape.type === 'weak-entity') {
                svgContent += `<rect x="${x + 2}" y="${y + 2}" width="${w - 4}" height="${h - 4}" fill="#ffffff" stroke="#2c3e50" stroke-width="2"/>\n`;
                svgContent += `<rect x="${x + 6}" y="${y + 6}" width="${w - 12}" height="${h - 12}" fill="none" stroke="#2c3e50" stroke-width="2"/>\n`;
            } else if (shape.type === 'attribute') {
                svgContent += `<ellipse cx="${x + w / 2}" cy="${y + h / 2}" rx="${w / 2 - 4}" ry="${h / 2 - 4}" fill="#ffffff" stroke="#2c3e50" stroke-width="2"/>\n`;
            } else if (shape.type === 'key-attribute') {
                svgContent += `<ellipse cx="${x + w / 2}" cy="${y + h / 2}" rx="${w / 2 - 4}" ry="${h / 2 - 4}" fill="#ffffff" stroke="#2c3e50" stroke-width="2"/>\n`;
                svgContent += `<line x1="${x + 10}" y1="${y + h / 2 + 5}" x2="${x + w - 10}" y2="${y + h / 2 + 5}" stroke="#2c3e50" stroke-width="2"/>\n`;
            } else if (shape.type === 'multivalued') {
                svgContent += `<ellipse cx="${x + w / 2}" cy="${y + h / 2}" rx="${w / 2 - 4}" ry="${h / 2 - 4}" fill="#ffffff" stroke="#2c3e50" stroke-width="2"/>\n`;
                svgContent += `<ellipse cx="${x + w / 2}" cy="${y + h / 2}" rx="${w / 2 - 10}" ry="${h / 2 - 10}" fill="none" stroke="#2c3e50" stroke-width="2"/>\n`;
            } else if (shape.type === 'derived') {
                svgContent += `<ellipse cx="${x + w / 2}" cy="${y + h / 2}" rx="${w / 2 - 4}" ry="${h / 2 - 4}" fill="#ffffff" stroke="#2c3e50" stroke-width="2" stroke-dasharray="6,4"/>\n`;
            } else if (shape.type === 'relationship') {
                svgContent += `<polygon points="${x + w / 2},${y + 4} ${x + w - 4},${y + h / 2} ${x + w / 2},${y + h - 4} ${x + 4},${y + h / 2}" fill="#ffffff" stroke="#2c3e50" stroke-width="2"/>\n`;
            } else if (shape.type === 'identifying-rel') {
                svgContent += `<polygon points="${x + w / 2},${y + 4} ${x + w - 4},${y + h / 2} ${x + w / 2},${y + h - 4} ${x + 4},${y + h / 2}" fill="#ffffff" stroke="#2c3e50" stroke-width="2"/>\n`;
                svgContent += `<polygon points="${x + w / 2},${y + 10} ${x + w - 12},${y + h / 2} ${x + w / 2},${y + h - 10} ${x + 12},${y + h / 2}" fill="none" stroke="#2c3e50" stroke-width="2"/>\n`;
            }

            // Etiket
            if (shape.label) {
                svgContent += `<text x="${x + w / 2}" y="${y + h / 2}" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#1a1a1a">${shape.label}</text>\n`;
            }
        });

        svgContent += '</svg>';

        const blob = new Blob([svgContent], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'er-diyagram.svg';
        link.click();
        URL.revokeObjectURL(url);
        showToast('SVG indirildi.', 'success');
    }

    // Zoom Kontrolleri
    function setZoom(level) {
        // Minimum %100, maksimum %300 - canvas küçülmesin
        state.zoomLevel = Math.max(1, Math.min(3, level));
        elements.canvasArea.style.transform = `scale(${state.zoomLevel})`;
        elements.canvasArea.style.transformOrigin = 'top left';
        if (elements.zoomLevel) {
            elements.zoomLevel.textContent = Math.round(state.zoomLevel * 100) + '%';
        }
    }

    function zoomIn() {
        setZoom(state.zoomLevel + 0.1);
    }

    function zoomOut() {
        setZoom(state.zoomLevel - 0.1);
    }

    function zoomReset() {
        setZoom(1);
    }

    // LocalStorage Auto-Save
    function saveToLocalStorage() {
        try {
            const data = getDiagramData();
            localStorage.setItem('er-diagram-autosave', JSON.stringify(data));
        } catch (error) {
            console.error('Auto-save başarısız:', error);
        }
    }

    function loadFromLocalStorage() {
        try {
            const saved = localStorage.getItem('er-diagram-autosave');
            if (saved) {
                const data = JSON.parse(saved);
                if (data.shapes && data.shapes.length > 0) {
                    if (confirm('Önceki oturumdan kaydedilmiş diyagram bulundu. Yüklensin mi?')) {
                        loadDiagramData(data);
                        showToast('Önceki oturum yüklendi.', 'success');
                    }
                }
            }
        } catch (error) {
            console.error('Auto-load başarısız:', error);
        }
    }

    function scheduleAutoSave() {
        if (state.autoSaveTimer) {
            clearTimeout(state.autoSaveTimer);
        }
        state.autoSaveTimer = setTimeout(() => {
            saveToLocalStorage();
        }, 2000); // 2 saniye sonra kaydet
    }

    // Touch Desteği
    function setupTouchSupport() {
        let touchStartShape = null;
        let touchStartPos = null;
        let touchStartShapePos = null;

        elements.shapesContainer.addEventListener('touchstart', (e) => {
            if (e.touches.length !== 1) return;
            const touch = e.touches[0];
            const target = e.target.closest('.er-shape');
            if (!target) return;

            e.preventDefault();
            const shapeId = target.id;
            const shape = getShapeById(shapeId);
            if (!shape) return;

            if (state.deleteMode) {
                deleteShape(shape);
                return;
            }

            if (state.connectMode) {
                handleConnection(shape);
                return;
            }

            touchStartShape = shape;
            touchStartPos = { x: touch.clientX, y: touch.clientY };
            touchStartShapePos = { x: shape.x, y: shape.y };
            selectShape(shape);
        }, { passive: false });

        elements.shapesContainer.addEventListener('touchmove', (e) => {
            if (!touchStartShape || e.touches.length !== 1) return;
            e.preventDefault();

            const touch = e.touches[0];
            const dx = touch.clientX - touchStartPos.x;
            const dy = touch.clientY - touchStartPos.y;

            touchStartShape.x = touchStartShapePos.x + dx / state.zoomLevel;
            touchStartShape.y = touchStartShapePos.y + dy / state.zoomLevel;

            const el = document.getElementById(touchStartShape.id);
            if (el) {
                el.style.left = touchStartShape.x + 'px';
                el.style.top = touchStartShape.y + 'px';
            }
            updateConnections();
        }, { passive: false });

        elements.shapesContainer.addEventListener('touchend', (e) => {
            if (touchStartShape) {
                updateSharePreview();
                scheduleAutoSave();
            }
            touchStartShape = null;
            touchStartPos = null;
            touchStartShapePos = null;
        });

        // Canvas'a dokunarak yeni şekil eklemek için (toolbox'tan sürükleme)
        let draggedToolTouch = null;

        document.querySelectorAll('.tool-item').forEach(item => {
            item.addEventListener('touchstart', (e) => {
                if (e.touches.length !== 1) return;
                draggedToolTouch = item.getAttribute('data-type');
            }, { passive: true });
        });

        elements.canvasArea.addEventListener('touchend', (e) => {
            if (draggedToolTouch && e.changedTouches.length === 1) {
                const touch = e.changedTouches[0];
                const rect = elements.canvasArea.getBoundingClientRect();
                const x = (touch.clientX - rect.left) / state.zoomLevel - 60;
                const y = (touch.clientY - rect.top) / state.zoomLevel - 30;

                if (x >= 0 && y >= 0) {
                    const shape = createShape(draggedToolTouch, x, y, '');
                    openEditModal(shape);
                }
            }
            draggedToolTouch = null;
        }, { passive: true });
    }

    // Gereksinim Kontrolü
    function checkRequirement(req) {
        if (req.type === 'connection') {
            // Bağlantı kontrolü
            if (Array.isArray(req.from)) {
                // Çoklu bağlantı
                return req.from.every(fromLabel => {
                    return state.connections.some(conn => {
                        const fromShape = state.shapes.find(s => s.id === conn.from);
                        const toShape = state.shapes.find(s => s.id === conn.to);
                        return (fromShape && fromShape.label === fromLabel && toShape && toShape.label === req.to) ||
                               (toShape && toShape.label === fromLabel && fromShape && fromShape.label === req.to);
                    });
                });
            } else {
                return state.connections.some(conn => {
                    const fromShape = state.shapes.find(s => s.id === conn.from);
                    const toShape = state.shapes.find(s => s.id === conn.to);
                    const forwardMatch = fromShape && fromShape.label === req.from && toShape && toShape.label === req.to;
                    const reverseMatch = toShape && toShape.label === req.from && fromShape && fromShape.label === req.to;
                    if (!forwardMatch && !reverseMatch) {
                        return false;
                    }
                    if (req.cardinality) {
                        if (forwardMatch) {
                            return conn.fromCardinality === req.cardinality;
                        }
                        if (reverseMatch) {
                            return conn.toCardinality === req.cardinality;
                        }
                        return false;
                    }
                    return true;
                });
            }
        } else {
            // Şekil kontrolü
            return state.shapes.some(shape => {
                const typeMatch = shape.type === req.type ||
                    (req.type === 'attribute' && ['attribute', 'key-attribute', 'multivalued', 'derived'].includes(shape.type));
                const labelMatch = shape.label.toLowerCase() === req.label.toLowerCase();
                return typeMatch && labelMatch;
            });
        }
    }

    // Sürükle-Bırak Olayları
    function setupDragAndDrop() {
        const toolItems = document.querySelectorAll('.tool-item');

        toolItems.forEach(item => {
            item.addEventListener('dragstart', (e) => {
                state.draggedTool = item.getAttribute('data-type');
                e.dataTransfer.setData('text/plain', state.draggedTool);
            });

            item.addEventListener('dragend', () => {
                state.draggedTool = null;
            });
        });

        elements.canvasArea.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        elements.canvasArea.addEventListener('drop', (e) => {
            e.preventDefault();
            if (state.draggedTool) {
                const rect = elements.canvasArea.getBoundingClientRect();
                const x = e.clientX - rect.left - 60;
                const y = e.clientY - rect.top - 30;
                const shape = createShape(state.draggedTool, x, y, '');
                openEditModal(shape);
            }
        });
    }

    function applySelectionBox(x, y, width, height) {
        clearSelection();
        if (width < 3 && height < 3) {
            return;
        }
        const right = x + width;
        const bottom = y + height;
        state.shapes.forEach(shape => {
            const centerX = shape.x + shape.width / 2;
            const centerY = shape.y + shape.height / 2;
            if (centerX >= x && centerX <= right && centerY >= y && centerY <= bottom) {
                selectShape(shape, true);
            }
        });
    }

    function initSelectionBox() {
        if (!elements.canvasArea) return;
        elements.canvasArea.addEventListener('mousedown', (e) => {
            if (e.button !== 0) return;
            if (state.connectMode || state.deleteMode) return;
            if (e.ctrlKey || e.metaKey) return;
            if (e.target !== elements.canvasArea && e.target !== elements.shapesContainer) return;
            const rect = elements.canvasArea.getBoundingClientRect();
            const startX = e.clientX - rect.left;
            const startY = e.clientY - rect.top;
            state.selectionStart = { x: startX, y: startY };
            state.selectionBox = document.createElement('div');
            state.selectionBox.className = 'selection-box';
            state.selectionBox.style.left = `${startX}px`;
            state.selectionBox.style.top = `${startY}px`;
            state.selectionBox.style.width = '0px';
            state.selectionBox.style.height = '0px';
            elements.canvasArea.appendChild(state.selectionBox);
            clearSelection();

            function onMouseMove(ev) {
                const currentX = ev.clientX - rect.left;
                const currentY = ev.clientY - rect.top;
                const x = Math.min(startX, currentX);
                const y = Math.min(startY, currentY);
                const width = Math.abs(currentX - startX);
                const height = Math.abs(currentY - startY);
                state.selectionBox.style.left = `${x}px`;
                state.selectionBox.style.top = `${y}px`;
                state.selectionBox.style.width = `${width}px`;
                state.selectionBox.style.height = `${height}px`;
                applySelectionBox(x, y, width, height);
            }

            function onMouseUp() {
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
                if (state.selectionBox) {
                    state.selectionBox.remove();
                    state.selectionBox = null;
                }
                state.selectionStart = null;
            }

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
    }

    // Olay Dinleyicileri
    function attachEventListeners() {
        elements.themeToggle.addEventListener('click', toggleTheme);
        elements.btnConnect.addEventListener('click', () => setConnectMode(!state.connectMode));
        elements.btnDelete.addEventListener('click', () => setDeleteMode(!state.deleteMode));
        elements.btnClearCanvas.addEventListener('click', clearCanvas);
        elements.btnDuplicate.addEventListener('click', duplicateSelection);
        elements.scenarioSelect.addEventListener('change', (e) => loadScenario(e.target.value));
        elements.btnCheckScenario.addEventListener('click', checkScenario);
        elements.btnSaveLabel.addEventListener('click', saveLabel);
        elements.btnCancelEdit.addEventListener('click', closeEditModal);
        elements.btnSaveConnection.addEventListener('click', saveConnectionDetails);
        elements.btnCancelConnection.addEventListener('click', () => closeConnectionModal(Boolean(state.pendingConnection)));
        elements.connectionModal.addEventListener('click', (e) => {
            if (e.target === elements.connectionModal) {
                closeConnectionModal(Boolean(state.pendingConnection));
            }
        });
        if (elements.connectionPreset) {
            elements.connectionPreset.addEventListener('change', function() {
                const value = this.value;
                if (value) {
                    applyPresetSelection(value);
                }
            });
        }
        if (elements.btnDeleteConnection) {
            elements.btnDeleteConnection.addEventListener('click', () => {
                if (state.editingConnection) {
                    deleteConnection(state.editingConnection.id);
                    closeConnectionModal();
                }
            });
        }
        elements.btnExportJson.addEventListener('click', exportDiagramJSON);
        elements.btnExportPng.addEventListener('click', exportDiagramPNG);
        if (elements.btnExportSvg) {
            elements.btnExportSvg.addEventListener('click', exportDiagramSVG);
        }
        elements.btnImportJson.addEventListener('click', promptImportJSON);
        elements.btnCopyJson.addEventListener('click', copyDiagramJSON);
        elements.btnApplyJson.addEventListener('click', () => {
            importDiagramFromText();
        });
        elements.btnApplyJson.addEventListener('mousedown', () => {
            state.blockPreviewUpdate = true;
        });
        elements.importInput.addEventListener('change', handleImportFile);

        // Zoom kontrolleri
        if (elements.btnZoomIn) {
            elements.btnZoomIn.addEventListener('click', zoomIn);
        }
        if (elements.btnZoomOut) {
            elements.btnZoomOut.addEventListener('click', zoomOut);
        }
        if (elements.btnZoomReset) {
            elements.btnZoomReset.addEventListener('click', zoomReset);
        }

        // Mouse wheel zoom
        elements.canvasArea.addEventListener('wheel', (e) => {
            if (e.ctrlKey) {
                e.preventDefault();
                if (e.deltaY < 0) {
                    zoomIn();
                } else {
                    zoomOut();
                }
            }
        }, { passive: false });
        if (elements.shareCode) {
            elements.shareCode.addEventListener('focus', () => {
                state.shareLocked = true;
                state.blockPreviewUpdate = false;
            });
            elements.shareCode.addEventListener('blur', () => {
                state.shareLocked = false;
                if (!state.blockPreviewUpdate) {
                    updateSharePreview();
                }
            });
        }

        initSelectionBox();
        elements.canvasArea.addEventListener('click', (e) => {
            if (e.target === elements.canvasArea || e.target === elements.shapesContainer) {
                clearSelection();
            }
        });

        // Modal dışına tıklama
        elements.editModal.addEventListener('click', (e) => {
            if (e.target === elements.editModal) {
                closeEditModal();
            }
        });

        // Enter tuşu ile kaydet
        elements.shapeLabel.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                saveLabel();
            }
        });

        // Yeni İlişki Kurulum Modalı event'leri
        if (elements.btnSaveRelSetup) {
            elements.btnSaveRelSetup.addEventListener('click', saveRelationshipSetup);
        }
        if (elements.btnCancelRelSetup) {
            elements.btnCancelRelSetup.addEventListener('click', () => closeRelationshipSetupModal(true));
        }
        if (elements.relSetupModal) {
            elements.relSetupModal.addEventListener('click', (e) => {
                if (e.target === elements.relSetupModal) {
                    closeRelationshipSetupModal(true);
                }
            });
        }
        if (elements.relName) {
            elements.relName.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    saveRelationshipSetup();
                }
            });
        }

        document.addEventListener('keydown', handleKeydown);
    }

    // DOM Elemanlarını Yükle
    function loadElements() {
        elements = {
            appShell: document.getElementById('builder-shell'),
            themeToggle: document.getElementById('theme-toggle'),
            themeIcon: document.getElementById('theme-icon'),
            themeText: document.getElementById('theme-text'),
            canvasArea: document.getElementById('canvas-area'),
            shapesContainer: document.getElementById('shapes-container'),
            connectionsSvg: document.getElementById('connections-svg'),
            modeIndicator: document.getElementById('mode-indicator'),
            elementCount: document.getElementById('element-count'),
            btnConnect: document.getElementById('btn-connect'),
            btnDelete: document.getElementById('btn-delete'),
            btnDuplicate: document.getElementById('btn-duplicate'),
            btnClearCanvas: document.getElementById('btn-clear-canvas'),
            scenarioSelect: document.getElementById('scenario-select'),
            scenarioDescription: document.getElementById('scenario-description'),
            scenarioRequirements: document.getElementById('scenario-requirements'),
            requirementsList: document.getElementById('requirements-list'),
            btnCheckScenario: document.getElementById('btn-check-scenario'),
            scenarioFeedback: document.getElementById('scenario-feedback'),
            editModal: document.getElementById('edit-modal'),
            shapeLabel: document.getElementById('shape-label'),
            btnSaveLabel: document.getElementById('btn-save-label'),
            btnCancelEdit: document.getElementById('btn-cancel-edit'),
            connectionModal: document.getElementById('connection-modal'),
            connectionModalDesc: document.getElementById('connection-modal-desc'),
            connectionFromCardinality: document.getElementById('connection-from-cardinality'),
            connectionToCardinality: document.getElementById('connection-to-cardinality'),
            connectionLabel: document.getElementById('connection-label'),
            fromCardGroup: document.getElementById('from-cardinality-group'),
            toCardGroup: document.getElementById('to-cardinality-group'),
            btnSaveConnection: document.getElementById('btn-save-connection'),
            btnDeleteConnection: document.getElementById('btn-delete-connection'),
            btnCancelConnection: document.getElementById('btn-cancel-connection'),
            connectionPreset: document.getElementById('connection-preset'),
            btnExportJson: document.getElementById('btn-export-json'),
            btnExportPng: document.getElementById('btn-export-png'),
            btnExportSvg: document.getElementById('btn-export-svg'),
            btnImportJson: document.getElementById('btn-import-json'),
            btnCopyJson: document.getElementById('btn-copy-json'),
            btnApplyJson: document.getElementById('btn-apply-json'),
            shareCode: document.getElementById('share-code'),
            importInput: document.getElementById('import-input'),
            toast: document.getElementById('builder-toast'),
            btnZoomIn: document.getElementById('btn-zoom-in'),
            btnZoomOut: document.getElementById('btn-zoom-out'),
            btnZoomReset: document.getElementById('btn-zoom-reset'),
            zoomLevel: document.getElementById('zoom-level'),
            relSetupModal: document.getElementById('relationship-setup-modal'),
            relSetupDesc: document.getElementById('rel-setup-desc'),
            relName: document.getElementById('rel-name'),
            relCardinality: document.getElementById('rel-cardinality'),
            btnSaveRelSetup: document.getElementById('btn-save-rel-setup'),
            btnCancelRelSetup: document.getElementById('btn-cancel-rel-setup')
        };
    }

    // Başlat
    function init() {
        loadElements();
        loadTheme();
        setupDragAndDrop();
        setupTouchSupport();
        attachEventListeners();
        updateSharePreview();
        loadFromLocalStorage();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
