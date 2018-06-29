import NebPay from '../utils/nebpay';
import config from '../config';
import { Neb, HttpRequest } from 'nebulas';

const nebPay = new NebPay();
const env = process.env.env;

const neb = new Neb();
neb.setRequest(new HttpRequest(config[env]['contact_host']))
const cry = "n1zgzRFoweYNkvhmEY7vcWJuYDjVYXVcwro";
const CryptoJS = require("crypto-js");

const cvtHouse = (house) => {
    const {
        title,
        tel,
        email,
        housePrice,
        address,
        area,
        houseType,
        sellType,
        usage,
        description,
        pic1,
        pic2,
        pic3,
        price,
        createTime,
        paidCount,
        status,
        houseId,
    } = house;
    return {
        title,
        tel: CryptoJS.AES.decrypt(tel, cry).toString(CryptoJS.enc.Utf8),
        email: CryptoJS.AES.decrypt(email, cry).toString(CryptoJS.enc.Utf8),
        housePrice,
        address,
        area,
        houseType,
        sellType,
        usage,
        description,
        pic1,
        pic2,
        pic3,
        price,
        createTime,
        paidCount,
        houseId,
        ifPaid: status === 0 || status === 1,
    };
}


export const postHouse = (title,
                          tel,
                          email,
                          housePrice,
                          address,
                          area,
                          houseType,
                          sellType,
                          usage,
                          description,
                          pic1,
                          pic2,
                          pic3,
                          price) => {
    return new Promise((resolve) => {
        nebPay.call(config[env]['contract_address'], 0, 'saveHouse',
            JSON.stringify([
                title,
                CryptoJS.AES.encrypt(tel, cry).toString(),
                CryptoJS.AES.encrypt(email, cry).toString(),
                housePrice,
                address,
                area,
                houseType,
                sellType,
                usage,
                description,
                pic1,
                pic2,
                pic3,
                price,
                null]), {
                qrcode: {
                    showQRCode: false
                },
                listener: (res) => {
                    if (res.txhash) {
                        resolve(res);
                    }
                }
            });
    });
}

export const checkHouse = (houseId, price) => {
    return new Promise((resolve) => {
        nebPay.call(config[env]['contract_address'], price, 'checkHouse',
            JSON.stringify([houseId]), {
                qrcode: {
                    showQRCode: false
                },
                listener: (res) => {
                    if (res.txhash) {
                        resolve(res);
                    }
                }
            });
    });
}

export const getHouse = (houseId) => {
    return new Promise((resolve) => {
        nebPay.simulateCall(config[env]['contract_address'], 0, 'getHouse', JSON.stringify([houseId]), {
            qrcode: {
                showQRCode: false
            },
            listener: (res) => {
                resolve({
                    house: cvtHouse(JSON.parse(res.result)),
                });
            }
        });
    });
}

export const getHouseList = (curPage = 1) => {
    const perPage = 30;

    return new Promise((resolve) => {
        neb.api.call({
            from: config[env]['contract_address'],
            to: config[env]['contract_address'],
            value: 0,
            contract: {
                function: 'getHouseList',
                args: JSON.stringify([perPage, (curPage - 1) * perPage]),
            },
            gasPrice: 1000000,
            gasLimit: 2000000,
        })
            .then(res => {
                return resolve({
                    list: JSON.parse(res.result).map(item => (
                        cvtHouse(item)
                    )),
                });
            })
    });
}

