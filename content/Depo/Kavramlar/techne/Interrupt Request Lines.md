---
tags:
  - bilgi/techne
---
Donanım aygıtlarının işlemciden dikkat istemesini sağlayan kesme sinyali yollarıdır. 

Söz gelimi, klavye bir tuşa basıldığını bildirmek istediğinde ilgili denetleyici üzerinden bir IRQ oluşturur. İşlemci bu isteği alarak normal program akışının arasına bir kesme işleme süreci yerleştirir. Modern sistemlerde eski fiziksel IRQ hatlarının işlevlerinin önemli bir kısmı APIC gibi gelişmiş kesme denetleyicileri tarafından yönetilir.