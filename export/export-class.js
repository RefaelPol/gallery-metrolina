class Picture {
    constructor(productImg, productName, productAuthor, productPrice, productInventory) {
        this.img = productImg;
        this.name = productName;
        this.author = productAuthor;
        this.price = productPrice;
        this.inventory = productInventory;
    }
    getImage() {
        const IMG_path = './IMG/'
        return `${IMG_path}${this.img}`;
    }
    getName() {
        return this.name;
    }
    getAuthor() {
        return this.author;
    }
    getPrice() {
        return `$${this.price}`;
    }

    getInventory() {
        let instock = this.inventory;
        if (instock === true) {
            instock = "";
        } else {
            instock = "Out of stock";
        }
        return instock;
    }
}


const pictures = [
    new Picture(
        //img path:
        'snakepic.jpg',

        //name:
        'snake pic',

        //author:
        'by refael 1',

        //price:
        115,

        //inventory:
        false
    ),
    new Picture(
        //img path:
        'dogpic.jpg',

        //name:
        'dog pic',

        //author:
        'by refael 2',

        //price:
        212,

        //inventory:
        true
    ),
    new Picture(
        //img path:
        'catpic.jpg',

        //name:
        'cat pic',

        //author:
        'bay refael 3',

        //price:
        96,

        //inventory:
        false
    ),
    new Picture(
        //img path:
        'rabitpic.jpg',

        //name:
        'rabit pic',

        //author:
        'bay refael 4',

        //price:
        555,

        //inventory:
        true
    )
];

export {
    pictures
};