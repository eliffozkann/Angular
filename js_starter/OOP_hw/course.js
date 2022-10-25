export default class Course {
    constructor(title, subtitle, instructor, price, category) { 
        this.title = title;
        this.subtitle = subtitle;
        this.instructor = instructor;
        this.price = price;
        this.category = category;
    }

    tanit() {
        console.log(this);
    }
}

const course1 = new Course("Yazılım Geliştirici Yetiştirme Kampı (C# + ANGULAR)", "2 ay sürecek Yazılım Geliştirici Yetiştirme Kampımızın takip, döküman ve duyurularını buradan yapacağız.", "Engin Demirog", "Ücretsiz", "Programlama");
const course2 = new Course("Senior Yazılım Geliştirici Yetiştirme Kampı (.NET)", "Senior Yazılım Geliştirici Yetiştirme Kampımızın takip, döküman ve duyurularını buradan yapacağız.", "Engin Demirog", "Ücretsiz", "Programlama");
const course3 = new Course("(2022) Yazılım Geliştirici Yetiştirme Kampı - JAVA", "Java Yazılım Geliştirici Yetiştirme Kampımızın takip, döküman ve duyurularını buradan yapacağız.", "Engin Demirog", "Ücretsiz", "Programlama");
const course4 = new Course("Yazılım Geliştirici Yetiştirme Kampı (JavaScript)", "1,5 ay sürecek Yazılım Geliştirici Yetiştirme Kampımızın takip, döküman ve duyurularını buradan yapacağız.", "Engin Demirog", "Ücretsiz", "Programlama");
const course5 = new Course("Programlamaya Giriş için Temel Kurs", "PYTHON, JAVA, C# gibi tüm programlama dilleri için temel programlama mantığını anlaşılır örneklerle öğrenin.", "Engin Demirog", "Ücretsiz", "Programlama");
const course6 = new Course("Yazılım Geliştirici Yetiştirme Kampı (JAVA + REACT)", "2 ay sürecek Yazılım Geliştirici Yetiştirme Kampımızın takip, döküman ve duyurularını buradan yapacağız.", "Engin Demirog", "Ücretsiz", "Programlama");

course1.tanit();
course2.tanit();
course3.tanit();
course4.tanit();
course5.tanit();
course6.tanit();
