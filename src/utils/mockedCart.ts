import { Product } from "./mockedProducts"

export type Cart = {
    product: Product,
    amount: number
}

export const mockedCart: Cart[] = [{
    product: {
        id: "1",
        title: "Tênis de Caminhada Leve Confortável",
        price: 179.9,
        image: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"
    },
    amount:4
}, {
    product: {
        id: "2",
        title: "Tênis VR Caminhada Confortável Detalhes Couro Masculino",
        price: 139.9,
        image: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg"
    },
    amount: 1
}, {
    product: {
        id: "3",
        title: "Tênis Adidas Duramo Lite 2.0",
        price: 219.9,
        image: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg"
    },
    amount: 5
}]