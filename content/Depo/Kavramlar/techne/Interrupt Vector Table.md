---
tags:
  - bilgi/techne
---
Hangi kesme numarasının hangi kesme işleyici koduna yönlendirileceğini belirleyen tablodur. İşlemci bir kesme aldığında, gelen kesmeyle ilişkili vektör numarasına bakarak çalıştırılması gereken kesme işleyicisinin adresini bulur. Böylece “bu kesme hangi kodu çalıştıracak?” sorusunun cevabı belirlenmiş olur. x86 sistemlerde işletim sistemi tarafından kullanılan yapı günümüzde **IDT (Interrupt Descriptor Table)** olarak adlandırılır.