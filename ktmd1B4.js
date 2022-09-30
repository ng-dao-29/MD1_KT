
class  Rectangle{
    y
    x
    widthq
    heightq
    cl
    constructor(x,y,w,h,cl) {
        this.x = x;
        this.y = y;
        this.widthq = w;
        this.heightq = h;
        this.cl = cl
    }
    //vẽ
    render (ctx) {
        ctx.beginPath();
        ctx.fillStyle=this.cl;
        ctx.fillRect(this.x,this.y,this.widthq,this.heightq);
        ctx.stroke();
    }
}
let canvat = document.getElementById('1111');


let ctx = canvat.getContext('2d');
let chu_nhat = new Rectangle(10,10,200,100,"#000000")

chu_nhat.render(ctx);







