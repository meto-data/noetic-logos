"use strict";

(function () {
    const questionSets = {
        test1: {
            title: "C# Temelleri ve Sözdizimi",
            questions: [
                { number: 1, text: 'Aşağıdaki kodda ekrana "Hello World!" yazdırmak için boş bırakılan yerlere sırasıyla ne gelmelidir?\n```csharp\nstatic void ___ (string[] args)\n{\n  ___ . ___ ("Hello World!");    \n}\n```', options: [{ label: 'A', text: 'Main / System / Write' }, { label: 'B', text: 'Start / Console / Print' }, { label: 'C', text: 'Main / Console / WriteLine' }, { label: 'D', text: 'main / console / writeline' }, { label: 'E', text: 'Program / Output / Print' }], correctLabel: 'C' },
                { number: 2, text: 'Aşağıdaki C# kodunun çıktısı ne olacaktır?\n```csharp\nConsole.WriteLine(5 + 5);\n```', options: [{ label: 'A', text: '55' }, { label: 'B', text: '10' }, { label: 'C', text: '5+5' }, { label: 'D', text: 'Syntax error' }, { label: 'E', text: '25' }], correctLabel: 'B' },
                { number: 3, text: '`Write()` ve `WriteLine()` metotları arasındaki fark nedir?', options: [{ label: 'A', text: '`WriteLine()` sayılar için, `Write()` metinler için kullanılır.' }, { label: 'B', text: '`Write()` metni yazdıktan sonra aynı satırda kalır, `WriteLine()` ise yazdıktan sonra bir alt satıra geçer.' }, { label: 'C', text: 'Aralarında hiçbir fark yoktur, aynı işi yaparlar.' }, { label: 'D', text: '`Write()` sadece değişkenleri, `WriteLine()` sabit metinleri yazar.' }, { label: 'E', text: '`Write()` daha hızlı çalışır.' }], correctLabel: 'B' },
                { number: 4, text: "C#'ta tek satırlık bir yorum (single-line comment) başlatmak için hangi sembol kullanılır?", options: [{ label: 'A', text: '#' }, { label: 'B', text: '//' }, { label: 'C', text: '/*' }, { label: 'D', text: '--' }, { label: 'E', text: '<!--' }], correctLabel: 'B' },
                { number: 5, text: "C#'ta çok satırlı bir yorum (multi-line comment) bloğu nasıl oluşturulur?", options: [{ label: 'A', text: '`//` ile başlar ve `//` ile biter.' }, { label: 'B', text: '`<!--` ile başlar ve `-->` ile biter.' }, { label: 'C', text: '`/*` ile başlar ve `*/` ile biter.' }, { label: 'D', text: '`##` ile başlar ve `##` ile biter.' }, { label: 'E', text: '`{` ile başlar ve `}` ile biter.' }], correctLabel: 'C' },
                { number: 6, text: '15 sayısını saklamak için en uygun veri tipi hangisidir?\n```csharp\n___ myNum = 15;\n```', options: [{ label: 'A', text: 'float' }, { label: 'B', text: 'string' }, { label: 'C', text: 'int' }, { label: 'D', text: 'double' }, { label: 'E', text: 'bool' }], correctLabel: 'C' },
                { number: 7, text: "C#'ta metin (text) saklamak için hangi veri tipi kullanılır?", options: [{ label: 'A', text: 'int' }, { label: 'B', text: 'double' }, { label: 'C', text: 'string' }, { label: 'D', text: 'char' }, { label: 'E', text: 'text' }], correctLabel: 'C' },
                { number: 8, text: "Bir değişkene değer atamak için C#'ta hangi sembol kullanılır?", options: [{ label: 'A', text: '`==`' }, { label: 'B', text: '=' }, { label: 'C', text: '`:=`' }, { label: 'D', text: '`::`' }, { label: 'E', text: '`<-`' }], correctLabel: 'B' },
                { number: 9, text: '`myNum` adında bir tamsayı değişkeni oluşturup ona 50 değerini atamak için doğru sözdizimi hangisidir?', options: [{ label: 'A', text: '`myNum = 50;`' }, { label: 'B', text: '`int myNum; myNum = "50";`' }, { label: 'C', text: '`int myNum = 50;`' }, { label: 'D', text: '`let myNum = 50;`' }, { label: 'E', text: '`myNum int = 50;`' }], correctLabel: 'C' },
                { number: 10, text: "C#'taki `const` anahtar kelimesi ne işe yarar?", options: [{ label: 'A', text: 'Bir değişkenin daha sonra değiştirilebileceğini bildirir.' }, { label: 'B', text: 'Bir değişkenin değerinin sabit, yani okunabilir ama değiştirilemez olduğunu bildirir.' }, { label: 'C', text: 'Global bir değişken bildirir.' }, { label: 'D', text: 'Bir sınıfın örneğinin oluşturulmasını engeller.' }, { label: 'E', text: 'Bir değişkenin ondalıklı sayı olacağını belirtir.' }], correctLabel: 'B' },
                { number: 11, text: "C#'ta tek bir karakteri saklamak için hangi veri tipi kullanılır?", options: [{ label: 'A', text: 'string' }, { label: 'B', text: 'int' }, { label: 'C', text: 'char' }, { label: 'D', text: 'bool' }, { label: 'E', text: 'character' }], correctLabel: 'C' },
                { number: 12, text: '`true` veya `false` değerini saklamak için hangi veri tipi kullanılır?\n```csharp\n___ isCodingFun = true;\n```', options: [{ label: 'A', text: 'string' }, { label: 'B', text: 'char' }, { label: 'C', text: 'int' }, { label: 'D', text: 'bool' }, { label: 'E', text: 'bit' }], correctLabel: 'D' },
                { number: 13, text: "C#'ta örtük tür dönüştürme (implicit casting) nedir?", options: [{ label: 'A', text: 'Bir türü diğerine manuel olarak dönüştürme.' }, { label: 'B', text: 'Daha küçük bir türün daha büyük bir tür boyutuna otomatik olarak dönüştürülmesi.' }, { label: 'C', text: '`Convert` sınıfını kullanarak yapılan dönüştürme.' }, { label: 'D', text: 'Sadece sayıları string\'e dönüştürme işlemi.' }, { label: 'E', text: 'Derleme zamanında hata veren bir dönüştürme.' }], correctLabel: 'B' },
                { number: 14, text: 'Aşağıdaki dönüşümlerden hangisi açık tür dönüştürme (explicit casting) gerektirir?', options: [{ label: 'A', text: '`int`\'den `double`\'a' }, { label: 'B', text: '`char`\'dan `int`\'e' }, { label: 'C', text: '`double`\'dan `int`\'e' }, { label: 'D', text: '`int`\'den `long`\'a' }, { label: 'E', text: '`float`\'tan `double`\'a' }], correctLabel: 'C' },
                { number: 15, text: '`Convert.ToString(myInt)` ne işe yarar?', options: [{ label: 'A', text: 'Bir `int`\'i `double`\'a dönüştürür.' }, { label: 'B', text: 'Bir `string`\'i `int`\'e dönüştürür.' }, { label: 'C', text: 'Bir `int`\'i `string`\'e dönüştürür.' }, { label: 'D', text: 'Bir `double`\'ı `string`\'e dönüştürür.' }, { label: 'E', text: '`myInt` değişkeninin tipini `string` olarak değiştirir.' }], correctLabel: 'C' },
                { number: 16, text: 'Bir `string`\'in karakter sayısını (uzunluğunu) bulmak için hangi özellik kullanılır?\n```csharp\nstring txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";\nConsole.WriteLine(txt.___);\n```', options: [{ label: 'A', text: 'Length' }, { label: 'B', text: 'Count' }, { label: 'C', text: 'Size' }, { label: 'D', text: 'GetLength()' }, { label: 'E', text: 'Chars' }], correctLabel: 'A' },
                { number: 17, text: 'Dize enterpolasyonu (string interpolation) kullanarak iki değişkeni birleştirmek için doğru sözdizimi hangisidir?\n```csharp\nstring firstName = "John";\nstring lastName = "Doe";\nstring name = ___"My full name is: {firstName} {lastName}";\n```', options: [{ label: 'A', text: '#' }, { label: 'B', text: '$' }, { label: 'C', text: '%' }, { label: 'D', text: '&' }, { label: 'E', text: 'Hiçbir şey gerekmez.' }], correctLabel: 'B' },
                { number: 18, text: '`if` koşulunun içine "Hello World" yazdırmak için `x`\'in `y`\'den büyük olduğunu kontrol eden kod hangisidir?\n```csharp\nint x = 50;\nint y = 10;\n___ (x ___ y) \n{\n  Console.WriteLine("Hello World");\n}\n```', options: [{ label: 'A', text: '`if / <`' }, { label: 'B', text: '`for / >`' }, { label: 'C', text: '`if / >`' }, { label: 'D', text: '`while / ==`' }, { label: 'E', text: '`if / !=`' }], correctLabel: 'C' },
                { number: 19, text: 'Ternary operatörü (üçlü operatör) kullanarak yazılan "shorthand if...else" ifadesini tamamlamak için boşluklara sırasıyla ne gelmelidir?\n```csharp\nstring result = time < 18 ___ "Good day." ___ "Good evening.";\n```', options: [{ label: 'A', text: '`, / ;`' }, { label: 'B', text: '`then / else`' }, { label: 'C', text: '? / :' }, { label: 'D', text: '`-> / ||`' }, { label: 'E', text: '`is / isnot`' }], correctLabel: 'C' },
                { number: 20, text: '`switch` ifadesinin amacı nedir?', options: [{ label: 'A', text: 'Birden çok döngüyü çalıştırmak.' }, { label: 'B', text: 'Bir değişkenin değerine göre çalıştırılacak birçok kod bloğundan birini seçmek.' }, { label: 'C', text: 'Bir değerler listesi üzerinde yineleme yapmak.' }, { label: 'D', text: 'Koddaki istisnaları işlemek.' }, { label: 'E', text: 'İki değeri karşılaştırmak.' }], correctLabel: 'B' },
                { number: 21, text: 'Bir `switch` ifadesindeki `break` anahtar kelimesinin amacı nedir?', options: [{ label: 'A', text: 'Programı sonlandırır.' }, { label: 'B', text: 'Daha fazla `case` testini durdurur ve `switch` bloğundan çıkar.' }, { label: 'C', text: 'Döngünün mevcut yinelemesini atlar.' }, { label: 'D', text: 'Kalan tüm `case`\'leri yürütmeye devam eder.' }, { label: 'E', text: 'Kodu 1 saniye bekletir.' }], correctLabel: 'B' },
                { number: 22, text: '`i` 3\'ten küçük olduğu sürece çalışan bir döngü oluşturmak için boşluğa hangi anahtar kelime gelmelidir?\n```csharp\nint i = 0;\n___ (i < 3)\n{\n  Console.WriteLine(i);\n  i++;\n}\n```', options: [{ label: 'A', text: 'loop' }, { label: 'B', text: 'do' }, { label: 'C', text: 'for' }, { label: 'D', text: 'while' }, { label: 'E', text: 'if' }], correctLabel: 'D' },
            ]
        },
        test2: {
            title: "Diziler ve OOP Temelleri",
            questions: [
                { number: 23, text: '0\'dan 4\'e kadar olan sayıları ekrana yazdıracak `for` döngüsünü tamamlamak için boşluklara sırasıyla ne gelmelidir?\n```csharp\n___ (int i = 0; i < 5; ___) \n{\n  Console.WriteLine(i);\n}\n```', options: [{ label: 'A', text: '`while / i--`' }, { label: 'B', text: '`do / i = i+1`' }, { label: 'C', text: '`for / i++`' }, { label: 'D', text: '`loop / i+=1`' }, { label: 'E', text: '`for / i=i`' }], correctLabel: 'C' },
                { number: 24, text: 'Bir döngüyü tamamen sonlandırmak ve döngüden hemen çıkmak için hangi anahtar kelime kullanılır?', options: [{ label: 'A', text: 'break' }, { label: 'B', text: 'continue' }, { label: 'C', text: 'return' }, { label: 'D', text: 'stop' }, { label: 'E', text: 'exit' }], correctLabel: 'A' },
                { number: 25, text: 'Bir döngünün mevcut yinelemesini atlayıp bir sonraki yinelemeye geçmek için hangi anahtar kelime kullanılır?', options: [{ label: 'A', text: 'break' }, { label: 'B', text: 'continue' }, { label: 'C', text: 'skip' }, { label: 'D', text: 'next' }, { label: 'E', text: 'pass' }], correctLabel: 'B' },
                { number: 26, text: '`"Volvo", "BMW", "Ford"` elemanlarını içeren `cars` adında bir `string` dizisi (array) oluşturmak için doğru sözdizimi hangisidir?', options: [{ label: 'A', text: '`string cars = {"Volvo", "BMW", "Ford"};`' }, { label: 'B', text: '`string[] cars = ("Volvo", "BMW", "Ford");`' }, { label: 'C', text: '`string[] cars = {"Volvo", "BMW", "Ford"};`' }, { label: 'D', text: '`array<string> cars = {"Volvo", "BMW", "Ford"};`' }, { label: 'E', text: '`string cars[] = new string[3];`' }], correctLabel: 'C' },
                { number: 27, text: 'Bir dizinin (array) eleman sayısını bulmak için hangi özellik kullanılır?', options: [{ label: 'A', text: '`Size`' }, { label: 'B', text: '`Count()`' }, { label: 'C', text: '`Length`' }, { label: 'D', text: '`Elements`' }, { label: 'E', text: '`Capacity`' }], correctLabel: 'C' },
                { number: 28, text: "OOP'nin açılımı aşağıdakilerden hangisidir?", options: [{ label: 'A', text: 'Operation-Oriented Programming' }, { label: 'B', text: 'Object-Organized Programming' }, { label: 'C', text: 'Operational Object Programming' }, { label: 'D', text: 'Object-Oriented Programming' }, { label: 'E', text: 'Optimal Object Programming' }], correctLabel: 'D' },
                { number: 29, text: 'Aşağıdakilerden hangisi nesne tabanlı programlamanın (OOP) bir avantajıdır?', options: [{ label: 'A', text: 'OOP, kodun hata ayıklamasını ve bakımını zorlaştırır.' }, { label: 'B', text: 'OOP, programlar için net bir yapı sağlar.' }, { label: 'C', text: 'OOP, sınıflara ve nesnelere olan ihtiyacı ortadan kaldırır.' }, { label: 'D', text: 'OOP, kod tekrarını artırır.' }, { label: 'E', text: 'OOP, yalnızca küçük ölçekli projeler için uygundur.' }], correctLabel: 'B' },
                { number: 30, text: 'Bir sınıf (class) ve bir nesne (object) arasındaki ilişki nedir?', options: [{ label: 'A', text: 'Nesne, bir sınıfın şablonudur.' }, { label: 'B', text: 'Sınıf, bir nesnenin örneğidir.' }, { label: 'C', text: 'Nesne, bir sınıfın örneğidir.' }, { label: 'D', text: 'Sınıf ve nesne tamamen aynı şeydir.' }, { label: 'E', text: 'Bir sınıf, bir nesnenin ebeveynidir (parent).' }], correctLabel: 'C' },
                { number: 31, text: "C#'ta bir sınıf (class) nedir?", options: [{ label: 'A', text: 'Bir nesnenin örneği.' }, { label: 'B', text: 'Nesneler oluşturmak için kullanılan bir şablon (blueprint).' }, { label: 'C', text: 'Bir nesnenin içindeki bir metot.' }, { label: 'D', text: 'Dahili bir veri türü.' }, { label: 'E', text: 'Sadece veri depolayan bir yapı.' }], correctLabel: 'B' },
                { number: 32, text: 'Aşağıdakilerden hangisi bir sınıfa (class) örnektir?', options: [{ label: 'A', text: 'Volvo' }, { label: 'B', text: 'myCar' }, { label: 'C', text: 'Kırmızı' }, { label: 'D', text: 'Araba' }, { label: 'E', text: 'Ford Mustang' }], correctLabel: 'D' },
                { number: 33, text: 'Aşağıdakilerden hangisi bir nesneye (object) örnektir?', options: [{ label: 'A', text: 'Araba' }, { label: 'B', text: 'Hayvan' }, { label: 'C', text: 'Volvo' }, { label: 'D', text: 'Renk' }, { label: 'E', text: 'İnsan' }], correctLabel: 'C' },
                { number: 34, text: 'Bir sınıfı tanımlamak için aşağıdaki kod bloğunda boş bırakılan yere hangi anahtar kelime gelmelidir?\n```csharp\n___ Car\n{\n  string color = "blue";\n}\n```', options: [{ label: 'A', text: 'class' }, { label: 'B', text: 'object' }, { label: 'C', text: 'new' }, { label: 'D', text: 'Car' }, { label: 'E', text: 'struct' }], correctLabel: 'A' },
                { number: 35, text: 'C#\'ta sınıf üyeleri (class members) nelerdir?', options: [{ label: 'A', text: 'Sadece bir sınıfın içindeki alanlar (değişkenler).' }, { label: 'B', text: 'Sadece bir sınıfın içindeki metotlar.' }, { label: 'C', text: 'Bir sınıfın içindeki hem alanlar (değişkenler) hem de metotlar.' }, { label: 'D', text: 'Sadece bir sınıfın yapıcı metotları (constructors).' }, { label: 'E', text: 'Sadece `public` olarak işaretlenmiş değişkenler.' }], correctLabel: 'C' },
                { number: 36, text: 'Bir sınıftan yeni bir nesne (object) oluşturmak için aşağıdaki kodda boş bırakılan yere hangi anahtar kelime gelmelidir?\n```csharp\nCar myObj = ___ Car();\n```', options: [{ label: 'A', text: 'new' }, { label: 'B', text: 'create' }, { label: 'C', text: 'class' }, { label: 'D', text: 'object' }, { label: 'E', text: 'instance' }], correctLabel: 'A' },
                { number: 37, text: 'Aşağıdaki kodda yorum satırlarında belirtilen `color` ve `fullThrottle()` sırasıyla ne olarak adlandırılır?\n```csharp\nclass Car\n{\n  string color = "red"; // Burası nedir?\n  public void fullThrottle() // Burası nedir?\n  { /*...*/ }\n}\n```', options: [{ label: 'A', text: 'Constructor / Method' }, { label: 'B', text: 'Field / Method' }, { label: 'C', text: 'Method / Field' }, { label: 'D', text: 'Class / Object' }, { label: 'E', text: 'Property / Function' }], correctLabel: 'B' },
                { number: 38, text: 'Birden fazla sınıf kullanmanın avantajını en iyi hangisi açıklar?', options: [{ label: 'A', text: 'Programda daha iyi organizasyon ve modülerlik sağlar.' }, { label: 'B', text: 'Bir programın daha hızlı çalışmasını sağlar.' }, { label: 'C', text: 'Bir sınıf için otomatik olarak nesneler oluşturur.' }, { label: 'D', text: 'Constructor (yapıcı metot) ihtiyacını ortadan kaldırır.' }, { label: 'E', text: 'Bellek kullanımını her zaman azaltır.' }], correctLabel: 'A' },
                { number: 86, text: 'C# Windows Forms uygulamasında bir formun (pencerenin) kendisi, aşağıdaki temel sınıflardan hangisinden türetilmiştir?', options: [{ label: 'A', text: 'System.Window' }, { label: 'B', text: 'System.Application' }, { label: 'C', text: 'System.Windows.Forms.Form' }, { label: 'D', text: 'System.Windows.Forms.Control' }, { label: 'E', text: 'System.Object' }], correctLabel: 'C' },
                { number: 87, text: 'Kullanıcının bir dizi seçenek arasından birini seçmesini veya yeni bir değer girmesini sağlayan birleşik giriş kutusu kontrolü hangisidir?', options: [{ label: 'A', text: 'ListBox' }, { label: 'B', text: 'ComboBox' }, { label: 'C', text: 'TextBox' }, { label: 'D', text: 'CheckedListBox' }, { label: 'E', text: 'DropDownList' }], correctLabel: 'B' },
                { number: 88, text: 'Bir `ListBox` kontrolüne programatik olarak yeni bir öğe eklemek için hangi metot kullanılır?\n```csharp\nlistBox1. ___ . ___ ("Yeni Öğe");\n```', options: [{ label: 'A', text: 'Add / Item' }, { label: 'B', text: 'Insert / New' }, { label: 'C', text: 'Items / Add' }, { label: 'D', text: 'List / Add' }, { label: 'E', text: 'Elements / Push' }], correctLabel: 'C' },
                { number: 89, text: 'Bir `TextBox` kontrolü içindeki metni almak için hangi özellik kullanılır?', options: [{ label: 'A', text: '`Value`' }, { label: 'B', text: '`Content`' }, { label: 'C', text: '`GetText()`' }, { label: 'D', text: '`Text`' }, { label: 'E', text: '`String`' }], correctLabel: 'D' },
                { number: 90, text: 'Kullanıcıdan tarih ve saat bilgisi almak için kullanılan en yaygın kontrol hangisidir?', options: [{ label: 'A', text: 'CalendarBox' }, { label: 'B', text: 'TimePicker' }, { label: 'C', text: 'ClockControl' }, { label: 'D', text: 'DateBox' }, { label: 'E', text: 'DateTimePicker' }], correctLabel: 'E' },
                { number: 91, text: 'Bir `ListBox` veya `ComboBox` kontrolünde kullanıcının seçtiği öğeyi almak için hangi özellik kullanılır?', options: [{ label: 'A', text: '`SelectedValue`' }, { label: 'B', text: '`SelectedItem`' }, { label: 'C', text: '`CurrentItem`' }, { label: 'D', text: '`CheckedItem`' }, { label: 'E', text: '`FocusedItem`' }], correctLabel: 'B' },
            ]
        },
        test3: {
            title: "Metotlar, Yapıcılar ve Kapsülleme",
            questions: [
                { number: 39, text: "C#'ta metotların (methods) amacı nedir?", options: [{ label: 'A', text: 'Tek bir değişkende birden çok değeri saklamak.' }, { label: 'B', text: 'Çağrıldığında belirli bir görevi yerine getiren bir kod bloğunu çalıştırmak.' }, { label: 'C', text: 'Bir koleksiyondaki öğeler arasında yineleme yapmak.' }, { label: 'D', text: 'Bir programdaki istisnaları işlemek.' }, { label: 'E', text: 'Programın giriş noktasını tanımlamak.' }], correctLabel: 'B' },
                { number: 40, text: 'Aşağıdaki kodda `MyMethod` adlı metodu `Main` içinde çağırmak için boşluğa ne gelmelidir?\n```csharp\nstatic void Main(string[] args)\n{\n   ___\n}\nstatic void MyMethod()\n{\n   Console.WriteLine("I just got executed!");\n}\n```', options: [{ label: 'A', text: '`Call MyMethod();`' }, { label: 'B', text: '`MyMethod;`' }, { label: 'C', text: '`MyMethod();`' }, { label: 'D', text: '`Execute MyMethod();`' }, { label: 'E', text: '`run MyMethod;`' }], correctLabel: 'C' },
                { number: 41, text: 'Bir metot bildirimindeki `void` anahtar kelimesi neyi belirtir?', options: [{ label: 'A', text: 'Metodun `private` olduğunu.' }, { label: 'B', text: 'Metodun `static` olduğunu.' }, { label: 'C', text: 'Metodun bir değer döndürmesi gerektiğini.' }, { label: 'D', text: 'Metodun herhangi bir değer döndürmediğini.' }, { label: 'E', text: 'Metodun parametre almadığını.' }], correctLabel: 'D' },
                { number: 42, text: 'Bir metoda parametre olarak geçirilen değere ne ad verilir?', options: [{ label: 'A', text: 'boolean' }, { label: 'B', text: 'argument (argüman)' }, { label: 'C', text: 'switch' }, { label: 'D', text: 'array' }, { label: 'E', text: 'parameter type' }], correctLabel: 'B' },
                { number: 43, text: 'Bir metottaki `return` anahtar kelimesi ne işe yarar?', options: [{ label: 'A', text: 'Metodu sonlandırır ve (varsa) bir değeri çağıran koda geri döndürür.' }, { label: 'B', text: 'Metodun sonucunu konsola yazdırır.' }, { label: 'C', text: 'Başka bir metodu çağırır.' }, { label: 'D', text: 'Parametresiz bir metot bildirir.' }, { label: 'E', text: 'Metodu yeniden başlatır.' }], correctLabel: 'A' },
                { number: 44, text: 'Metot aşırı yüklemesi (method overloading) ile ilgili olarak, "birden fazla metodun farklı parametrelerle aynı isme sahip olabileceği" ifadesi doğru mudur?', options: [{ label: 'A', text: 'Doğru' }, { label: 'B', text: 'Yanlış' }, { label: 'C', text: 'Sadece `private` metotlar için geçerlidir.' }, { label: 'D', text: 'Bu sadece yapıcı metotlar için geçerlidir.' }, { label: 'E', text: 'Bu C#\'ta desteklenmeyen bir özelliktir.' }], correctLabel: 'A' },
                { number: 45, text: "C#'ta yapıcı metot (constructor) nedir?", options: [{ label: 'A', text: 'Nesneleri yok etmek için kullanılan bir metot.' }, { label: 'B', text: 'Bir değer döndürmesi gereken bir metot.' }, { label: 'C', text: 'Sınıfın adından farklı bir ada sahip olabilen özel metot.' }, { label: 'D', text: 'Nesneler oluşturulduğunda onları başlatmak (initialize) için kullanılan özel bir metot.' }, { label: 'E', text: 'Sadece `static` olabilen bir metot.' }], correctLabel: 'D' },
                { number: 46, text: "C#'taki yapıcı metotlarla (constructors) ilgili temel kural nedir?", options: [{ label: 'A', text: 'Bir yapıcı metodun bir dönüş türü (return type) olmalıdır.' }, { label: 'B', text: 'Bir yapıcı metodun adı sınıftan farklı olmalıdır.' }, { label: 'C', text: 'Bir yapıcı metodun adı sınıfıyla aynı olmalıdır.' }, { label: 'D', text: 'Bir yapıcı metot `static` olarak bildirilmelidir.' }, { label: 'E', text: 'Her sınıfın en fazla bir yapıcı metodu olabilir.' }], correctLabel: 'C' },
                { number: 47, text: "C#'taki yapıcı metotlar hakkında aşağıdakilerden hangisi doğrudur?", options: [{ label: 'A', text: 'Eğer bir yapıcı metot tanımlanmazsa, C# varsayılan (default) parametresiz bir yapıcı metot sağlar.' }, { label: 'B', text: 'Bir yapıcı metodun her zaman en az bir parametresi olmalıdır.' }, { label: 'C', text: 'Yapıcı metotlar `void` olarak bir değer döndürmelidir.' }, { label: 'D', text: 'Yapıcı metotlar aşırı yüklenemez (cannot be overloaded).' }, { label: 'E', text: 'Yapıcı metotlar `private` olamaz.' }], correctLabel: 'A' },
                { number: 48, text: 'C#\'ta erişim belirleyicilerin (access modifiers) amacı nedir?', options: [{ label: 'A', text: 'Nesnelerin nasıl oluşturulacağını belirlemek.' }, { label: 'B', text: 'Sınıfların, alanların ve metotların görünürlüğünü ve erişilebilirliğini ayarlamak.' }, { label: 'C', text: 'Bir metodun dönüş türünü belirtmek.' }, { label: 'D', text: 'Metotların yürütülme sırasını kontrol etmek.' }, { label: 'E', text: 'Kodun derleme hızını optimize etmek.' }], correctLabel: 'B' },
                { number: 49, text: 'Bir sınıf üyesi (alan veya metot) için hiçbir erişim belirleyici belirtilmezse ne olur?', options: [{ label: 'A', text: 'Varsayılan olarak `public` kabul edilir.' }, { label: 'B', text: 'Varsayılan olarak `private` kabul edilir.' }, { label: 'C', text: 'Varsayılan olarak `protected` kabul edilir.' }, { label: 'D', text: 'Hiçbir yerden erişilemez hale gelir.' }, { label: 'E', text: 'Derleyici bir uyarı verir.' }], correctLabel: 'B' },
                { number: 50, text: '`model` değişkeninin kendi sınıfı dışından erişilemez olmasını sağlamak için hangi erişim belirleyici kullanılmalıdır?\n```csharp\n___ string model;\n```', options: [{ label: 'A', text: 'public' }, { label: 'B', text: 'private' }, { label: 'C', text: 'internal' }, { label: 'D', text: 'protected' }, { label: 'E', text: 'hidden' }], correctLabel: 'B' },
                { number: 51, text: 'Aşağıdaki kod çalıştırıldığında ne olur?\n```csharp\nclass Car { private string model = "Mustang"; }\nclass Program\n{\n  static void Main(string[] args)\n  {\n    Car myObj = new Car();\n    Console.WriteLine(myObj.model);\n  }\n}\n```', options: [{ label: 'A', text: 'Ekrana "Mustang" yazar.' }, { label: 'B', text: 'Ekrana "null" yazar.' }, { label: 'C', text: "'Car.model' koruma seviyesi nedeniyle erişilemez." }, { label: 'D', text: '`model` alanı otomatik olarak `public`\'e dönüştürülür.' }, { label: 'E', text: 'Program çalışır ancak bir `RuntimeException` fırlatır.' }], correctLabel: 'C' },
                { number: 52, text: '`model` değişkenine herhangi bir sınıftan erişilebilir olmasını sağlamak için hangi erişim belirleyici kullanılmalıdır?\n```csharp\nclass Car { ___ string model = "Mustang"; }\n```', options: [{ label: 'A', text: 'public' }, { label: 'B', text: 'private' }, { label: 'C', text: 'protected' }, { label: 'D', text: 'static' }, { label: 'E', text: 'global' }], correctLabel: 'A' },
                { number: 53, text: 'C#\'ta kapsüllemenin (encapsulation) temel amacı nedir?', options: [{ label: 'A', text: 'Tüm verilerin herkese açık olarak erişilebilir olmasına izin vermek.' }, { label: 'B', text: 'Hassas verilerin yetkisiz erişimden gizlendiğinden emin olmak.' }, { label: 'C', text: 'Kodun yürütülmesini hızlandırmak.' }, { label: 'D', text: 'Programın daha az bellek kullanmasını sağlamak.' }, { label: 'E', text: 'Sınıflar arası kalıtımı kolaylaştırmak.' }], correctLabel: 'B' },
                { number: 54, text: 'Bir özelliğin (property) `set` bloğunda atanan değeri temsil etmek için hangi anahtar kelime kullanılır?\n```csharp\npublic string Name\n{\n  get { return name; }\n  set { name = ___; }\n}\n```', options: [{ label: 'A', text: 'value' }, { label: 'B', text: 'name' }, { label: 'C', text: 'get' }, { label: 'D', text: 'set' }, { label: 'E', text: 'this' }], correctLabel: 'A' },
                { number: 55, text: 'Otomatik bir özellik (auto-implemented property) tanımlamak için boşluklara hangi anahtar kelimeler gelmelidir?\n```csharp\npublic string Name { ___; ___; }\n```', options: [{ label: 'A', text: 'return; value;' }, { label: 'B', text: 'get; set;' }, { label: 'C', text: 'public; private;' }, { label: 'D', text: 'read; write;' }, { label: 'E', text: 'in; out;' }], correctLabel: 'B' },
                { number: 92, text: 'Bir form üzerine metin göstermek için kullanılan, ancak kullanıcı tarafından doğrudan düzenlenemeyen en temel kontrol hangisidir?', options: [{ label: 'A', text: 'TextBox' }, { label: 'B', text: 'RichTextBox' }, { label: 'C', text: 'Label' }, { label: 'D', text: 'Panel' }, { label: 'E', text: 'ToolTip' }], correctLabel: 'C' },
                { number: 93, text: 'Bir kontrolü (örneğin bir butonu) form üzerinde görünmez yapmak için hangi özelliği `false` olarak ayarlanmalıdır?', options: [{ label: 'A', text: '`Enabled`' }, { label: 'B', text: '`Active`' }, { label: 'C', text: '`Hidden`' }, { label: 'D', text: '`Visible`' }, { label: 'E', text: '`Displayed`' }], correctLabel: 'D' },
                { number: 94, text: 'Bir kontrolün kullanıcı tarafından etkileşime girilmesini (tıklanmasını, yazılmasını vb.) engellemek için hangi özelliği `false` olarak ayarlanmalıdır?', options: [{ label: 'A', text: '`Enabled`' }, { label: 'B', text: '`ReadOnly`' }, { label: 'C', text: '`Locked`' }, { label: 'D', text: '`Visible`' }, { label: 'E', text: '`Interactive`' }], correctLabel: 'A' },
                { number: 95, text: 'Bir `CheckBox` kontrolünün işaretli olup olmadığını kontrol etmek için hangi `bool` türündeki özellik kullanılır?', options: [{ label: 'A', text: '`Selected`' }, { label: 'B', text: '`IsChecked`' }, { label: 'C', text: '`Checked`' }, { label: 'D', text: '`Ticked`' }, { label: 'E', text: '`Value`' }], correctLabel: 'C' },
                { number: 104, text: "C#'ta `field` (alan) ve `property` (özellik) arasındaki en temel fark nedir?", options: [{ label: 'A', text: "Field'lar sadece sayı, Property'ler sadece metin saklar." }, { label: 'B', text: 'Aralarında işlevsel bir fark yoktur, sadece yazım şekilleri farklıdır.' }, { label: 'C', text: "Field'lar her zaman `public`, Property'ler her zaman `private` olmak zorundadır." }, { label: 'D', text: 'Field, bir sınıftaki ham veri değişkenidir; Property ise bu alana kontrollü erişim (get/set blokları ile doğrulama veya mantık ekleme imkanı) sağlayan bir arayüzdür.' }, { label: 'E', text: "`Field'lar `static` olamazken, Property'ler olabilir." }], correctLabel: 'D' },
            ]
        },
        test4: {
            title: "Kalıtım, Polimorfizm ve Soyutlama",
            questions: [
                { number: 56, text: "C#'ta Kalıtım (Inheritance) nedir?", options: [{ label: 'A', text: 'Sınıflar arasında kod kopyalamanın bir yolu.' }, { label: 'B', text: 'Bir sınıfın başka bir sınıftan özellikleri ve metotları miras aldığı mekanizma.' }, { label: 'C', text: '`private` değişkenler oluşturma yöntemi.' }, { label: 'D', text: 'Aynı ada sahip birden fazla sınıf tanımlama süreci.' }, { label: 'E', text: 'Nesneleri bellekte saklama tekniği.' }], correctLabel: 'B' },
                { number: 57, text: 'Kalıtımın (Inheritance) temel avantajı nedir?', options: [{ label: 'A', text: 'Bir sınıfın, başka bir sınıfın alanlarını ve metotlarını yeniden kullanarak kod tekrarını azaltması.' }, { label: 'B', text: 'Tüm sınıfların aynı metotlara sahip olmasını zorunlu kılması.' }, { label: 'C', text: 'Programların daha güvenli olmasını sağlaması.' }, { label: 'D', text: 'Derleme süresini kısaltması.' }, { label: 'E', text: 'Nesnelerin bellekte daha az yer kaplamasını sağlaması.' }], correctLabel: 'A' },
                { number: 58, text: '`Car` sınıfının `Vehicle` sınıfından kalıtım alması için boşluğa hangi sözdizimi gelmelidir?\n```csharp\nclass Car ___ Vehicle { /* ... */ }\n```', options: [{ label: 'A', text: 'extends' }, { label: 'B', text: 'inherits' }, { label: 'C', text: ':' }, { label: 'D', text: '->' }, { label: 'E', text: 'implements' }], correctLabel: 'C' },
                { number: 59, text: 'Kalıtım (Inheritance) yoluyla türetilmiş sınıflardan `model` değişkenine erişime izin vermek, ancak diğer dış sınıflardan erişimi kısıtlamak için hangi erişim belirleyici kullanılmalıdır?\n```csharp\nclass Car { ___ string model = "Mustang"; }\nclass SportsCar : Car { /* ... */ }\n```', options: [{ label: 'A', text: 'private' }, { label: 'B', text: 'public' }, { label: 'C', text: 'protected' }, { label: 'D', text: 'internal' }, { label: 'E', text: 'sealed' }], correctLabel: 'C' },
                { number: 60, text: 'Bir sınıfla birlikte kullanıldığında `sealed` anahtar kelimesi ne işe yarar?', options: [{ label: 'A', text: 'Metotların override edilmesini engeller.' }, { label: 'B', text: 'Sınıfın kalıtım yoluyla miras alınmasını engeller.' }, { label: 'C', text: 'Sınıfın bir yapıcı metot içermesini zorunlu kılar.' }, { label: 'D', text: 'Sınıfın metotları override etmesine izin verir.' }, { label: 'E', text: 'Sınıfın sadece tek bir örneğinin oluşturulmasını sağlar.' }], correctLabel: 'B' },
                { number: 61, text: 'Türetilmiş sınıfların bir metodu geçersiz kılmasına (override) izin vermek için temel sınıftaki metoda hangi anahtar kelime eklenmelidir?\n```csharp\nclass Animal { public ___ void animalSound() { /*...*/ } }\n```', options: [{ label: 'A', text: 'extends' }, { label: 'B', text: 'virtual' }, { label: 'C', text: 'override' }, { label: 'D', text: 'static' }, { label: 'E', text: 'sealed' }], correctLabel: 'B' },
                { number: 62, text: 'Temel sınıf (base class) metodunu doğru bir şekilde geçersiz kılmak (override) için türetilmiş sınıftaki metoda hangi anahtar kelime eklenmelidir?\n```csharp\nclass Pig : Animal\n{\n  public ___ void animalSound() { /*...*/ }\n}\n```', options: [{ label: 'A', text: 'inherit' }, { label: 'B', text: 'virtual' }, { label: 'C', text: 'override' }, { label: 'D', text: 'new' }, { label: 'E', text: 'base' }], correctLabel: 'C' },
                { number: 63, text: "C#'ta Soyutlama (Abstraction) kavramının amacı nedir?", options: [{ label: 'A', text: 'Tüm sınıf üyelerine doğrudan erişime izin vermek.' }, { label: 'B', text: 'Karmaşık sistemi basitleştirmek için gereksiz detayları gizleyip sadece temel özellikleri göstermek.' }, { label: 'C', text: 'Bir sınıfta kalıtımı engellemek.' }, { label: 'D', text: 'Tüm metotları `static` yapmak.' }, { label: 'E', text: 'Kodun satır sayısını azaltmak.' }], correctLabel: 'B' },
                { number: 64, text: 'Soyut bir metot (abstract method) hakkında aşağıdakilerden hangisi doğrudur?', options: [{ label: 'A', text: 'Bir metot gövdesine (`{}`) sahip olmalıdır.' }, { label: 'B', text: 'Soyut bir sınıfın dışında bildirilebilir.' }, { label: 'C', text: 'Türetilmiş (somut) bir sınıfta mutlaka override edilerek uygulanmalıdır.' }, { label: 'D', text: 'Türetilmiş bir sınıfta `virtual` anahtar kelimesi ile uygulanmalıdır.' }, { label: 'E', text: '`private` erişim belirleyicisine sahip olabilir.' }], correctLabel: 'C' },
                { number: 65, text: 'Soyut bir sınıftan (abstract class) bir nesne oluşturmaya çalışırsanız ne olur?', options: [{ label: 'A', text: 'Başarıyla derlenir ve nesne oluşturulur.' }, { label: 'B', text: "Derleme hatası oluşur: 'Soyut sınıf veya arayüzün bir örneği oluşturulamaz'." }, { label: 'C', text: 'Program çalışır, ancak nesne `null` olur.' }, { label: 'D', text: 'Sadece temel sınıfın yapıcı metodu çağırılır.' }, { label: 'E', text: 'Program `InvalidOperationException` fırlatır.' }], correctLabel: 'B' },
                { number: 66, text: "C#'ta bir arayüz (interface) nedir?", options: [{ label: 'A', text: 'Hem soyut hem de somut (gövdeli) metotları içeren bir sınıf.' }, { label: 'B', text: 'Yalnızca metot imzaları, özellikler, olaylar veya dizinleyiciler gibi soyut üyeler içerebilen bir sözleşme (contract).' }, { label: 'C', text: 'Kalıtım alınamayan bir sınıf türü.' }, { label: 'D', text: 'Mutlaka bir yapıcı metoda sahip olması gereken bir sınıf.' }, { label: 'E', text: 'Bir nesnenin bellekteki kopyası.' }], correctLabel: 'B' },
                { number: 67, text: 'Bir arayüz (interface) oluşturmak için hangi anahtar kelime kullanılır?\n```csharp\n___ IAnimal\n{\n  void animalSound();\n}\n```', options: [{ label: 'A', text: 'class' }, { label: 'B', text: 'interface' }, { label: 'C', text: 'struct' }, { label: 'D', text: 'abstract' }, { label: 'E', text: 'module' }], correctLabel: 'B' },
                { number: 68, text: 'Arayüz (interface) üyeleri hakkında aşağıdakilerden hangisi doğrudur?', options: [{ label: 'A', text: '`private` veya `protected` gibi erişim belirleyicilere sahip olabilirler.' }, { label: 'B', text: 'Metotlar bir gövdeye sahip olmalıdır.' }, { label: 'C', text: 'Varsayılan olarak gövdesiz (abstract) ve herkese açıktır (public).' }, { label: 'D', text: 'Alanlar (fields) ve yapıcı metotlar (constructors) içerebilirler.' }, { label: 'E', text: '`static` olarak tanımlanabilirler.' }], correctLabel: 'C' },
                { number: 69, text: 'Bir sınıfın birden fazla arayüzü (interface) nasıl uygulayabildiğini gösterir?', options: [{ label: 'A', text: 'Çoklu kalıtım kullanarak.' }, { label: 'B', text: '`new` anahtar kelimesini her arayüz için tekrar ederek.' }, { label: 'C', text: 'Arayüz adlarını virgülle (`,`) ayırarak.' }, { label: 'D', text: 'Her arayüz için ayrı bir `implements` anahtar kelimesi kullanarak.' }, { label: 'E', text: 'Bu C#\'ta mümkün değildir.' }], correctLabel: 'C' },
                { number: 70, text: "Neden C#'ta arayüzleri (interfaces) kullanmalısınız?", options: [{ label: 'A', text: 'Farklı sınıfların belirli bir işlevselliği yerine getireceğini garanti ederek gevşek bağlı (loosely coupled) sistemler ve tak-çıkar (pluggable) mimariler oluşturmak için.' }, { label: 'B', text: 'Tüm metotların `public` olmasını zorlamak için.' }, { label: 'C', text: 'Nesnelerin doğrudan örneklenmesine izin vermek için.' }, { label: 'D', text: 'Bir sınıfın birden fazla davranışa sahip olmasını engellemek için.' }, { label: 'E', text: 'Kodun derlenme hızını artırmak için.' }], correctLabel: 'A' },
                { number: 105, text: 'Bir sınıfın örneği (nesnesi) `new` anahtar kelimesi ile oluşturulduğunda, bellekte bu nesne için yer ayrıldıktan sonra otomatik olarak çağrılan özel metot hangisidir?', options: [{ label: 'A', text: '`Initialize` metodu' }, { label: 'B', text: '`Main` metodu' }, { label: 'C', text: '`Constructor` (Yapıcı) metot' }, { label: 'D', text: '`Finalize` metodu' }, { label: 'E', text: '`Create` metodu' }], correctLabel: 'C' },
                { number: 106, text: 'Aşağıdakilerden hangisi bir sınıf üyesi (class member) DEĞİLDİR?', options: [{ label: 'A', text: 'Field (Alan)' }, { label: 'B', text: 'Method (Metot)' }, { label: 'C', text: 'Property (Özellik)' }, { label: 'D', text: 'Constructor (Yapıcı Metot)' }, { label: 'E', text: 'Namespace (İsim Alanı)' }], correctLabel: 'E' },
                { number: 107, text: 'Bir sınıfın içinde, o sınıfın mevcut örneğine (nesnesine) referans vermek için kullanılan anahtar kelime hangisidir?', options: [{ label: 'A', text: '`self`' }, { label: 'B', text: '`object`' }, { label: 'C', text: '`instance`' }, { label: 'D', text: '`this`' }, { label: 'E', text: '`base`' }], correctLabel: 'D' },
                { number: 108, text: 'Bir `Person` sınıfı için aşağıdaki gibi bir yapıcı metot (constructor) tanımlanmıştır. Bu sınıftan bir nesne oluşturmak için doğru sözdizimi hangisidir?\n```csharp\npublic class Person\n{\n    public string Name;\n    public Person(string name) // Yapıcı Metot\n    {\n        this.Name = name;\n    }\n}\n```', options: [{ label: 'A', text: '`Person myPerson = new Person();`' }, { label: 'B', text: '`Person myPerson = Person("Ahmet");`' }, { label: 'C', text: '`Person myPerson = new Person("Ahmet");`' }, { label: 'D', text: '`new Person myPerson = ("Ahmet");`' }, { label: 'E', text: '`Person myPerson = new Person(); myPerson.Name = "Ahmet";` (Bu çalışır ama yapıcı metoda uymaz)' }], correctLabel: 'C' },
                { number: 109, text: 'Form Tasarımcısı (Form Designer) tarafından oluşturulan ve form üzerindeki tüm kontrollerin özelliklerini ayarlayan kodların bulunduğu metot genellikle hangisidir?', options: [{ label: 'A', text: '`Main()`' }, { label: 'B', text: '`Form1_Load()`' }, { label: 'C', text: '`InitializeComponent()`' }, { label: 'D', text: '`CreateControls()`' }, { label: 'E', text: '`SetupUI()`' }], correctLabel: 'C' },
                { number: 110, text: 'Kullanıcıya basit bir mesaj göstermek, soru sormak (Evet/Hayır) veya bir uyarı vermek için kullanılan statik metotlara sahip sınıf hangisidir?', options: [{ label: 'A', text: '`Alert`' }, { label: 'B', text: '`DialogBox`' }, { label: 'C', text: '`Notification`' }, { label: 'D', text: '`MessageBox`' }, { label: 'E', text: '`PopupWindow`' }], correctLabel: 'D' },
            ]
        }
    };

    let activeTestId = null;
    let quizStates = {};
    const STORAGE_KEY_PREFIX = 'oopQuizState_';
    const debug = (...args) => console.log('[OOP QUIZ]', ...args);

    const storage = (() => {
        try {
            const testKey = `${STORAGE_KEY_PREFIX}__test__`;
            window.localStorage.setItem(testKey, '1');
            window.localStorage.removeItem(testKey);
            debug('LocalStorage is available.');
            return window.localStorage;
        } catch (err) {
            console.warn('LocalStorage is not available. Quiz progress will not persist across sessions.', err);
            return {
                getItem: () => null,
                setItem: () => {},
                removeItem: () => {},
            };
        }
    })();

    function initializeQuiz() {
        try {
            debug('Initializing quiz...');
            loadAllStates();
            setupNavigation();
            renderHomePage();
            initQuizControls();
            showSection('home');
            window.addEventListener('beforeunload', finalizeActiveQuestionTime);
            debug('Quiz initialized successfully.');
        } catch (error) {
            console.error('[OOP QUIZ] initializeQuiz failed:', error);
        }
    }

    function getQuizState(testId) {
        if (!quizStates[testId]) {
            const questionCount = questionSets[testId].questions.length;
            quizStates[testId] = defaultQuizState(questionCount);
        } else {
            normalizeQuizState(testId);
        }
        return quizStates[testId];
    }

    function defaultQuizState(length) {
        return {
            currentQuestionIndex: 0,
            answers: new Array(length).fill(null),
            completed: false,
            order: shuffleArray(Array.from({ length }, (_, idx) => idx)),
            questionTimes: new Array(length).fill(0),
            activeQuestionStart: null,
        };
    }
    
    // Utility and State Management Functions
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function loadAllStates() {
        Object.keys(questionSets).forEach(testId => {
            const storedState = storage.getItem(STORAGE_KEY_PREFIX + testId);
            if (storedState) {
                try {
                    quizStates[testId] = JSON.parse(storedState);
                } catch (e) {
                    console.warn(`Could not parse state for ${testId}.`, e);
                    quizStates[testId] = defaultQuizState(questionSets[testId].questions.length);
                }
            } else {
                quizStates[testId] = defaultQuizState(questionSets[testId].questions.length);
            }
            normalizeQuizState(testId);
        });
    }

    function saveState(testId) {
        if (quizStates[testId]) {
            try {
                storage.setItem(STORAGE_KEY_PREFIX + testId, JSON.stringify(quizStates[testId]));
            } catch (err) {
                console.warn(`Could not save state for ${testId}.`, err);
            }
        }
    }
    
    // Navigation and Section Rendering
    function showSection(sectionId) {
        document.querySelectorAll('.section').forEach(section => {
            section.style.display = section.id === sectionId ? 'block' : 'none';
        });
    }

    function setupNavigation() {
        try {
            debug('Setting up navigation...');
            const navContainer = document.querySelector('.top-nav ul');
            navContainer.innerHTML = ''; // Clear existing
            Object.keys(questionSets).forEach((testId, index) => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = '#';
                a.textContent = `Test ${index + 1}`;
                a.dataset.testId = testId;
                a.classList.add('nav-link');
                li.appendChild(a);
                navContainer.appendChild(li);
            });

            navContainer.addEventListener('click', (e) => {
                if (e.target.matches('.nav-link')) {
                    e.preventDefault();
                    finalizeActiveQuestionTime();
                    const testId = e.target.dataset.testId;
                    debug('Nav click -> startTest', testId);
                    startTest(testId);
                    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
                    e.target.classList.add('active');
                }
            });

            document.getElementById('homeBtn').addEventListener('click', (e) => {
                e.preventDefault();
                debug('Home button clicked');
                finalizeActiveQuestionTime();
                renderHomePage();
                showSection('home');
                document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            });
            debug('Navigation ready.');
        } catch (error) {
            console.error('[OOP QUIZ] setupNavigation failed:', error);
        }
    }

    function renderHomePage() {
        try {
            debug('Rendering home page...');
            const testGrid = document.getElementById('testGrid');
            testGrid.innerHTML = '';
            Object.keys(questionSets).forEach((testId, index) => {
                const state = getQuizState(testId);
                const { correctCount, answeredCount, total } = getQuizScores(testId);
                const accuracy = answeredCount > 0 ? ((correctCount / answeredCount) * 100).toFixed(0) : 0;

                const card = document.createElement('div');
                card.className = 'test-card';
                card.dataset.testId = testId;
                card.innerHTML = `
                    <h3>Test ${index + 1}: ${questionSets[testId].title}</h3>
                    <p>${total} Soru</p>
                    <div class="progress-bar">
                        <div class="progress" style="width: ${(answeredCount / total) * 100}%;"></div>
                    </div>
                    <p>İlerleme: ${answeredCount} / ${total}</p>
                    <p>Başarı: ${accuracy}%</p>
                    <button class="btn">Teste Başla</button>
                `;
                testGrid.appendChild(card);
            });

            testGrid.addEventListener('click', e => {
                if (e.target.matches('.btn')) {
                    const testId = e.target.closest('.test-card').dataset.testId;
                    debug('Home card startTest', testId);
                    startTest(testId);
                }
            });
        } catch (error) {
            console.error('[OOP QUIZ] renderHomePage failed:', error);
        }
    }
    
    // Quiz Logic Functions
    function startTest(testId) {
        try {
            debug('Starting test', testId);
            activeTestId = testId;
            const state = getQuizState(testId);
            document.getElementById('quizTitle').textContent = `Test: ${questionSets[testId].title}`;
            renderQuestion(state.currentQuestionIndex);
            updateQuizNavigation();
            showSection('module-quiz');
            startActiveQuestionTimer();
        } catch (error) {
            console.error(`[OOP QUIZ] startTest failed for ${testId}:`, error);
        }
    }
    
    function renderQuestion(orderIndex) {
        try {
            debug('Rendering question orderIndex', orderIndex, 'activeTestId', activeTestId);
            const state = getQuizState(activeTestId);
            const questions = questionSets[activeTestId].questions;
            const questionIndex = state.order[orderIndex];
            const question = questions[questionIndex];
            
            const container = document.getElementById('quizQuestionContainer');
            const feedbackBox = document.getElementById('quizFeedback');
            
            const selectedLabel = state.answers[questionIndex];
            
            const optionsHtml = question.options.map(option => {
                const optionId = `q${question.number}_${option.label}`;
                const checked = selectedLabel === option.label ? 'checked' : '';
                return `
                    <label for="${optionId}" data-label="${option.label}">
                        <input type="radio" id="${optionId}" name="question_${questionIndex}" value="${option.label}" ${checked}>
                        <span><strong>${option.label})</strong> ${option.text}</span>
                    </label>
                `;
            }).join('');

            const formattedText = question.text.replace(/```csharp\n([\s\S]*?)\n```/g, (match, code) => {
                const escapedCode = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                return `<pre><code>${escapedCode.trim()}</code></pre>`;
            }).replace(/\n/g, '<br>');

            container.innerHTML = `
                <div class="quiz-question">
                    <div class="question-text"><strong>Soru ${orderIndex + 1} / ${questions.length} (No: ${question.number}):</strong><br>${formattedText}</div>
                    <div class="quiz-options">${optionsHtml}</div>
                </div>
            `;
            
            container.querySelectorAll(`input[name="question_${questionIndex}"]`).forEach(input => {
                input.addEventListener('change', (e) => {
                    handleAnswerSelection(questionIndex, e.target.value);
                });
            });

            if (selectedLabel) {
                showAnswerFeedback(questionIndex, selectedLabel);
            } else {
                updateQuizFeedback(null);
            }
            
            applyOptionStyling(questionIndex);
            updateSubmitButtonVisibility();
        } catch (error) {
            console.error(`[OOP QUIZ] renderQuestion failed (test ${activeTestId}, order ${orderIndex}):`, error);
        }
    }

    function handleAnswerSelection(questionIndex, selectedLabel) {
        try {
            debug('Answer selected', { questionIndex, selectedLabel, activeTestId });
            const state = getQuizState(activeTestId);
            state.answers[questionIndex] = selectedLabel;
            saveState(activeTestId);
            showAnswerFeedback(questionIndex, selectedLabel);
            applyOptionStyling(questionIndex);
            updateSubmitButtonVisibility();
        } catch (error) {
            console.error('[OOP QUIZ] handleAnswerSelection failed:', error);
        }
    }

    function showAnswerFeedback(questionIndex, selectedLabel) {
        try {
            const question = questionSets[activeTestId].questions[questionIndex];
            const isCorrect = selectedLabel === question.correctLabel;
            const correctOption = question.options.find(opt => opt.label === question.correctLabel);
            
            if (isCorrect) {
                updateQuizFeedback({ type: 'correct', message: 'Doğru! 🎉' });
            } else {
                updateQuizFeedback({ type: 'incorrect', message: `Yanlış. Doğru cevap: <strong>${correctOption.label})</strong> ${correctOption.text}` });
            }
        } catch (error) {
            console.error('[OOP QUIZ] showAnswerFeedback failed:', error);
        }
    }

    function updateQuizFeedback(status) {
        try {
            const feedbackBox = document.getElementById('quizFeedback');
            feedbackBox.classList.remove('show', 'correct', 'incorrect');
            if (!status) {
                feedbackBox.innerHTML = '';
                return;
            }
            feedbackBox.innerHTML = status.message;
            feedbackBox.classList.add('show', status.type);
        } catch (error) {
            console.error('[OOP QUIZ] updateQuizFeedback failed:', error);
        }
    }

    function applyOptionStyling(questionIndex) {
        try {
            const state = getQuizState(activeTestId);
            const question = questionSets[activeTestId].questions[questionIndex];
            const selectedLabel = state.answers[questionIndex];

            document.querySelectorAll(`#quizQuestionContainer .quiz-options label`).forEach(label => {
                label.classList.remove('correct-choice', 'incorrect-choice');
                const optionLabel = label.dataset.label;
                if (selectedLabel) {
                    if (optionLabel === question.correctLabel) {
                        label.classList.add('correct-choice');
                    } else if (optionLabel === selectedLabel) {
                        label.classList.add('incorrect-choice');
                    }
                }
            });
        } catch (error) {
            console.error('[OOP QUIZ] applyOptionStyling failed:', error);
        }
    }
    
    // Navigation and Control Functions
    function updateQuizNavigation() {
        try {
            const state = getQuizState(activeTestId);
            const questions = questionSets[activeTestId].questions;
            document.getElementById('prevQuestionBtn').disabled = state.currentQuestionIndex === 0;
            document.getElementById('nextQuestionBtn').disabled = state.currentQuestionIndex >= questions.length - 1;
            debug('Navigation state updated', {
                current: state.currentQuestionIndex,
                total: questions.length,
                prevDisabled: document.getElementById('prevQuestionBtn').disabled,
                nextDisabled: document.getElementById('nextQuestionBtn').disabled,
            });
        } catch (error) {
            console.error('[OOP QUIZ] updateQuizNavigation failed:', error);
        }
    }

    function navigateQuestion(direction) {
        try {
            debug('navigateQuestion called', { direction, activeTestId });
            if (!activeTestId) {
                console.warn('[OOP QUIZ] navigateQuestion skipped: no activeTestId');
                return;
            }
            finalizeActiveQuestionTime();
            const state = getQuizState(activeTestId);
            const newIndex = state.currentQuestionIndex + direction;

            if (newIndex >= 0 && newIndex < questionSets[activeTestId].questions.length) {
                debug('Navigating to new index', newIndex);
                state.currentQuestionIndex = newIndex;
                renderQuestion(newIndex);
                updateQuizNavigation();
                startActiveQuestionTimer();
            } else {
                debug('Navigation blocked - out of range', { newIndex });
            }
        } catch (error) {
            console.error('[OOP QUIZ] navigateQuestion failed:', error);
        }
    }

    function initQuizControls() {
        try {
            debug('Initializing quiz controls...');
            const prevBtn = document.getElementById('prevQuestionBtn');
            const nextBtn = document.getElementById('nextQuestionBtn');
            const submitBtn = document.getElementById('submitQuizBtn');
            const resetBtn = document.getElementById('resetQuizBtn');

            if (!prevBtn || !nextBtn || !submitBtn || !resetBtn) {
                console.error('[OOP QUIZ] One or more quiz control buttons are missing.', {
                    prevBtnExists: Boolean(prevBtn),
                    nextBtnExists: Boolean(nextBtn),
                    submitBtnExists: Boolean(submitBtn),
                    resetBtnExists: Boolean(resetBtn),
                });
                return;
            }

            prevBtn.addEventListener('click', () => {
                debug('Prev button clicked');
                navigateQuestion(-1);
            });
            nextBtn.addEventListener('click', () => {
                debug('Next button clicked');
                navigateQuestion(1);
            });
            submitBtn.addEventListener('click', () => {
                debug('Submit button clicked');
                submitQuiz();
            });
            resetBtn.addEventListener('click', () => {
                debug('Reset button clicked');
                resetQuiz();
            });

            debug('Quiz controls initialized.');
        } catch (error) {
            console.error('[OOP QUIZ] initQuizControls failed:', error);
        }
    }
    
    function updateSubmitButtonVisibility() {
        const state = getQuizState(activeTestId);
        const allAnswered = state.answers.every(answer => answer !== null);
        document.getElementById('submitQuizBtn').style.display = allAnswered && !state.completed ? 'inline-block' : 'none';
    }

    function submitQuiz() {
        try {
            finalizeActiveQuestionTime();
            const state = getQuizState(activeTestId);
            state.completed = true;
            saveState(activeTestId);

            const { correctCount, total } = getQuizScores(activeTestId);
            const summaryBox = document.getElementById('quizSummary');
            summaryBox.innerHTML = `
                <h3>Test Sonucu</h3>
                <p>Doğru yanıt: <strong>${correctCount}</strong> / ${total}</p>
                <p>Başarı oranı: <strong>${((correctCount / total) * 100).toFixed(0)}%</strong></p>
            `;
            updateSubmitButtonVisibility();
            debug('Quiz submitted', { correctCount, total });
        } catch (error) {
            console.error('[OOP QUIZ] submitQuiz failed:', error);
        }
    }
    
    function resetQuiz() {
        try {
            if (confirm('Bu testi sıfırlamak istediğinizden emin misiniz? Cevaplarınız silinecek.')) {
                const questions = questionSets[activeTestId].questions;
                quizStates[activeTestId] = defaultQuizState(questions.length);
                saveState(activeTestId);
                startTest(activeTestId);
                document.getElementById('quizSummary').innerHTML = '';
                debug('Quiz reset for test', activeTestId);
            } else {
                debug('Quiz reset cancelled');
            }
        } catch (error) {
            console.error('[OOP QUIZ] resetQuiz failed:', error);
        }
    }

    function getQuizScores(testId) {
        try {
            const state = getQuizState(testId);
            const questions = questionSets[testId].questions;
            const total = questions.length;
            const answeredCount = state.answers.filter(a => a !== null).length;
            const correctCount = state.answers.reduce((count, selectedAnswer, questionIndex) => {
                if (selectedAnswer && questions[questionIndex] && questions[questionIndex].correctLabel === selectedAnswer) {
                    return count + 1;
                }
                return count;
            }, 0);
            debug('Scores computed', { testId, total, answeredCount, correctCount });
            return { total, answeredCount, correctCount };
        } catch (error) {
            console.error('[OOP QUIZ] getQuizScores failed:', error);
            return { total: 0, answeredCount: 0, correctCount: 0 };
        }
    }

    // Timer Functions (simplified)
    function startActiveQuestionTimer() {
        try {
            const state = getQuizState(activeTestId);
            state.activeQuestionStart = Date.now();
            debug('Question timer started', { activeTestId, currentQuestionIndex: state.currentQuestionIndex });
        } catch (error) {
            console.error('[OOP QUIZ] startActiveQuestionTimer failed:', error);
        }
    }

    function finalizeActiveQuestionTime() {
        try {
            if (!activeTestId) return;
            const state = getQuizState(activeTestId);
            if (state.activeQuestionStart) {
                const elapsed = Date.now() - state.activeQuestionStart;
                const questionIndex = state.order[state.currentQuestionIndex];
                state.questionTimes[questionIndex] = (state.questionTimes[questionIndex] || 0) + elapsed;
                state.activeQuestionStart = null;
                saveState(activeTestId);
                debug('Question timer finalized', { activeTestId, questionIndex, elapsed });
            }
        } catch (error) {
            console.error('[OOP QUIZ] finalizeActiveQuestionTime failed:', error);
        }
    }

    function normalizeQuizState(testId) {
        const questionCount = questionSets[testId].questions.length;
        let state = quizStates[testId];

        if (!state || typeof state !== 'object') {
            quizStates[testId] = defaultQuizState(questionCount);
            return;
        }

        if (!Array.isArray(state.answers)) {
            state.answers = new Array(questionCount).fill(null);
        } else if (state.answers.length !== questionCount) {
            state.answers = state.answers.slice(0, questionCount);
            if (state.answers.length < questionCount) {
                state.answers = state.answers.concat(new Array(questionCount - state.answers.length).fill(null));
            }
        }

        if (!Array.isArray(state.order) || state.order.length !== questionCount) {
            state.order = shuffleArray(Array.from({ length: questionCount }, (_, idx) => idx));
        } else {
            const unique = new Set(state.order);
            const invalidOrder = state.order.some(idx => typeof idx !== 'number' || idx < 0 || idx >= questionCount);
            if (unique.size !== questionCount || invalidOrder) {
                state.order = shuffleArray(Array.from({ length: questionCount }, (_, idx) => idx));
            }
        }

        if (!Array.isArray(state.questionTimes)) {
            state.questionTimes = new Array(questionCount).fill(0);
        } else if (state.questionTimes.length !== questionCount) {
            state.questionTimes = state.questionTimes.slice(0, questionCount);
            if (state.questionTimes.length < questionCount) {
                state.questionTimes = state.questionTimes.concat(new Array(questionCount - state.questionTimes.length).fill(0));
            }
        }

        if (typeof state.currentQuestionIndex !== 'number' || !Number.isInteger(state.currentQuestionIndex)) {
            state.currentQuestionIndex = 0;
        }
        state.currentQuestionIndex = Math.min(Math.max(state.currentQuestionIndex, 0), questionCount - 1);

        if (typeof state.completed !== 'boolean') {
            state.completed = Boolean(state.completed);
        }

        if (state.activeQuestionStart && typeof state.activeQuestionStart !== 'number') {
            state.activeQuestionStart = null;
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        try {
            debug('DOMContentLoaded fired');
            initializeQuiz();
        } catch (error) {
            console.error('[OOP QUIZ] DOMContentLoaded handler failed:', error);
        }
    });
})();
