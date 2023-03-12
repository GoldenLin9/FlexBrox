const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
let walkingSpeed = 1;

const backgroundImg = new Image();
backgroundImg.src = "images/bg.png";


window.addEventListener("load", ()=> {
    class Layer {
        constructor(image, speedModifier) {
            this.x = 0;
            this.y = 0;
            this.width = 600;
            this.image = image;
            this.speedModifier = speedModifier;
            this.speed = walkingSpeed * this.speedModifier;
            
        }
        
        update(dir) {
            this.speed = walkingSpeed * this.speedModifier;
            
            if (this.x < -this.width) this.x = 0;
            if (this.x > this.width) this.x = 0;
            
            this.x = Math.floor(this.x + ((dir*-1) * this.speed));
        }
        
        draw() {
            ctx.drawImage(this.image, this.x, this.y);
            ctx.drawImage(this.image, this.x + this.width, this.y);
            ctx.drawImage(this.image, this.x - this.width, this.y);
        }
    }
    
    const background = new Layer(backgroundImg, 5);
    

    window.addEventListener("keydown", (e)=> {
        if (e.key == "a" || e.key == "ArrowLeft")
            background.update(-1);
        else if (e.key == "d" || e.key == "ArrowRight")
            background.update(1);
    });
    
    function animate() {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        background.draw();
        requestAnimationFrame(animate);
    };
    
    animate();
});