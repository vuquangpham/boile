import GSAP from 'gsap';
import Utils from "./Utils";

export default class Page extends Utils{
    constructor({element, elements, id}){
        super({element, elements});

        this.id = id;
    }

    /**
     * Animations.
     */

    show(){
        return new Promise(resolve => {
            this.animationIn = GSAP.timeline();

            GSAP.fromTo(this.element, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
            });

            this.animationIn.call(() => {
                resolve();
            });
        });
    }

    hide(){
        return new Promise(resolve => {
            this.animationOut = GSAP.timeline();

            this.animationOut.to(this.element, {
                autoAlpha: 0,
                onComplete: resolve
            });
        });
    }

    /*
      Listeners.
     */

    addEventListeners(){
    }

    removeEventListeners(){
    }

    /**
     * Destroy.
     */

    destroy(){
        this.removeEventListeners();
    }
}

