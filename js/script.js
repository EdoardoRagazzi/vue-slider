
//----------------VUE JS------------------//
const app = new Vue(
    {
        el: "#app",
        data: {

            counter: 0,
            images: [
                "https://source.unsplash.com/collection/190727/1600x900",
                "https://source.unsplash.com/random",
                "https://source.unsplash.com/collection/random"
            ],
            intervallo: '',
        },
        methods: {
            nextPhoto() {
                (this.counter == this.images.length - 1) ? this.counter = 0 : this.counter++;
                removeActiveClasses()
            },
            prevPhoto() {
                (this.counter == 0) ? this.counter = this.counter = this.images.length - 1 : this.counter--;
                removeActiveClasses()
            },
            cambiaPhoto(indice) {
                this.counter = indice;
                clearInterval(this.intervallo);
            }
        },
        // MOUNTED TIMING
        mounted() {
            // this.intervallo = setInterval(this.nextPhoto, 3000);

            document.addEventListener("keydown", (element) => {
                this.nextPhoto()
                console.log(element.key)
            });
        }
    }
);

/* ------------------------------ */

const panels = document.querySelectorAll('.panel');
// CICLO FOR EACH FOR EVERY PANELS
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })

})
// FUNCTIONS THAT REMOVE ACTIVE CLASSES
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}