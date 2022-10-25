
import {Users} from "./models.js";
import {Questions} from "./models.js";
import {Course} from "./models.js";
import {Career} from "./models.js";


class HomeServices {
    constructor() {
        this.users = [];
        this.courses = [];
        this.careers = [];
        this.questions = [];
    }

    //Header
    addCareer(...info) {
        this.careers.push(...info);
    }
    listCareer() {
        console.log(this.careers)
    }

    addQuestions(...Q) {
        this.questions.push(...Q);
    }
    listQuestions() {
        console.log(this.questions)
    }


    //Users
    listUsers() {
        console.log(this.users);
    }
    addUsers(...U) {
        this.users.push(...U);
    }
    filterUser(filterData) {
        console.log(filterData !== undefined ? this.users.filter(filterData) : this.users);
    }


    //Courses
    listCourses() {
        console.log(this.courses);
    }
    addCourses(...C) {
        this.courses.push(...C);
    }
    filterCourses(filterData) {
        console.log(filterData !== undefined ? this.courses.filter(filterData) : this.courses);
    }
    findCourses(index) {
        let findCourse = this.courses.find(C => C.title.includes(index));
        console.log(findCourse)
    }
}

const homeServices = new HomeServices();

//Header Career
const career1 = new Career("Elif Özkan", 5423451235, "Mezun", "İş Arıyor", "Tecrübem Yok", "Ankara", "Frontend");
const career2 = new Career("Berkay YÜcel", 5231425362, "Mezun", "İş Aramıyor", "1 Yıllık Tecrübm Var", "Ankara", "Backend");
homeServices.addCareer(career1, career2);
homeServices.listCareer();


console.log("**********************************************************************************************************");

//Header Questions
const q1 = new Questions("Yazılım Geliştirici Yetiştirme Kampı ücretsiz mi olacak?", " Evet, ücretsiz olacak.");
const q2 = new Questions("Yazılım Geliştirici Yetiştirme Kampı nerede yayınlanacak?", "Kampımız canlı olarak yayınlanacak. Canlı yayın YouTube kanalımda gerçekleşecek. Canlı yayın alanına ulaşmak için tıklayınız. Yayın saatini kaçırmamak için kanala abone olup hatırlatıcı eklemeyi unutmayınız. Canlı yayın sonrası videolar, ödevler ve testler kodlama.io 'da yayınlanacak.");
const q3 = new Questions("Yazılım Geliştirici Yetiştirme Kamp programı ne kadar sürecek?", "Ücretsiz olarak vereceğim bu kamp 2 ay boyunca sürecek.");
const q4 = new Questions("Kamp programında neler olacak?", "Detaylı kamp programına ulaşmak için bağlantıyı tıklayınız.");
homeServices.addQuestions(q1, q2, q3, q4);
homeServices.listQuestions();


console.log("**********************************************************************************************************");


//Users
const user1 = new Users("Elif", "Özkan", "elfozkan@gmail.com", 123, "Student");
const user2 = new Users("Engin", "Demiroğ", "engin@gmail.com", 987, "Instructor");
homeServices.addUsers(user1, user2);
homeServices.listUsers();
console.log("-------------------------------------");
homeServices.filterUser((users) => users.name === "Engin");

console.log("**********************************************************************************************************");

//Courses
const course1 = new Course("Yazılım Geliştirici Yetiştirme Kampı (C# + ANGULAR)", "2 ay sürecek Yazılım Geliştirici Yetiştirme Kampımızın takip, döküman ve duyurularını buradan yapacağız.", "Engin Demirog", "Ücretsiz", "Programlama");
const course2 = new Course("Senior Yazılım Geliştirici Yetiştirme Kampı (.NET)", "Senior Yazılım Geliştirici Yetiştirme Kampımızın takip, döküman ve duyurularını buradan yapacağız.", "Engin Demirog", "Ücretsiz", "Programlama");
const course3 = new Course("(2022) Yazılım Geliştirici Yetiştirme Kampı - JAVA", "Java Yazılım Geliştirici Yetiştirme Kampımızın takip, döküman ve duyurularını buradan yapacağız.", "Engin Demirog", "Ücretsiz", "Programlama");
const course4 = new Course("Yazılım Geliştirici Yetiştirme Kampı (JavaScript)", "1,5 ay sürecek Yazılım Geliştirici Yetiştirme Kampımızın takip, döküman ve duyurularını buradan yapacağız.", "Engin Demirog", "Ücretsiz", "Programlama");
const course5 = new Course("Programlamaya Giriş için Temel Kurs", "PYTHON, JAVA, C# gibi tüm programlama dilleri için temel programlama mantığını anlaşılır örneklerle öğrenin.", "Engin Demirog", "Ücretsiz", "Programlama");
const course6 = new Course("Yazılım Geliştirici Yetiştirme Kampı (JAVA + REACT)", "2 ay sürecek Yazılım Geliştirici Yetiştirme Kampımızın takip, döküman ve duyurularını buradan yapacağız.", "Engin Demirog", "Ücretsiz", "Programlama");
homeServices.addCourses(course1, course2, course3, course4, course5, course6);
homeServices.filterCourses((course) => course.category === "Programlama");
console.log("------------------------------------------------------------");
homeServices.findCourses(".NET");

