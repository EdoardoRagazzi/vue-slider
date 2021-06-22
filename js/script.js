
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
            }

        }

    }
);





/* ------------------------------ */

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {

    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })

})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}