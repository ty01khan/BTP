const driver = require("./neo4j")
//const neo4j = require('neo4j-driver');
//const driver = new neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "btp_1"));

const cypher = 'CREATE (n:Details {Name: $name, FID: $fid, Address: $addr, City: $city, District: $dist, State: $state, NoOfBedroom: $bed, DrawingRoom: $dwr, DiningRoom: $dnr, LaundryRoom: $lr, Kitchen: $kitchen, AttachedBathroom: $abr, SharedBathroom: $sbr, Balcony: $balcony, Flooring: $floor, MaxIntakes: $mi, Furnished: $furnish, YearOfContract: $yoc, Price: $price, Popularity: $popularity, CarpetArea: $area, AgeOfFlat: $age}) RETURN n.FID';
// const param = {name:"", fid:"", addr:"", city:"", dist:"", state:"", bed:"", dwr:"", dnr:"", lr:"", kitchen:"", abr:"", sbr:"", balcony:"", floor:"", mi:"", furnish:"", yoc:"", price:"", popularity:0, area:700, age:12};

var session = driver.session();
const param1 = { name: "Rahul Niwas", fid: "001", addr: "Gultera Bazar", city: "Bihta", dist: "Patna", state: "Bihar", bed: 3, dwr: true, dnr: false, lr: false, kitchen: 1, abr: 1, sbr: 1, balcony: 1, floor: "Marbled", mi: 10, furnish: false, yoc: 25, price: 40, popularity: 0, area: 1200, age: 5 };
session.run(cypher, param1)
    .then(function (result) {
        //console.log(result);
        //console.log(result.records.length);
        // result.records.map(record => {
        //     console.log("Flat id " + record.get("n.FID") + " is added to database");
        // });
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param2 = { name: "Kumar Complex", fid: "002", addr: "Near Flyover, Main Road", city: "Bihta", dist: "Patna", state: "Bihar", bed: 2, dwr: true, dnr: false, lr: false, kitchen: 1, abr: 1, sbr: 0, balcony: 2, floor: "Cemented", mi: 8, furnish: true, yoc: 5, price: 10, popularity: 0, area: 1200, age: 5 };
session.run(cypher, param2)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());
    
var session = driver.session();
const param3 = { name: "Himadri Palace", fid: "003", addr: "Boring Road", city: "Patna", dist: "Patna", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: false, kitchen: 1, abr: 1, sbr: 2, balcony: 1, floor: "Tiled", mi: 10, furnish: false, yoc: 49, price: 30, popularity: 0, area: 700, age: 15 };
session.run(cypher, param3)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());
    
var session = driver.session();
const param4 = { name: "Gangotri Palace", fid: "004", addr: "Bailey Road", city: "Patna", dist: "Patna", state: "Bihar", bed: 3, dwr: true, dnr: false, lr: true, kitchen: 2, abr: 1, sbr: 2, balcony: 1, floor: "Tiled", mi: 10, furnish: false, yoc: 10, price: 20, popularity: 0, area: 1000, age: 10 };
session.run(cypher, param4)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());
    
var session = driver.session();
const param5 = { name: "Kaveri Mahal", fid: "005", addr: "Digha Ashiana Road", city: "Patna", dist: "Patna", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: false, kitchen: 1, abr: 2, sbr: 0, balcony: 1, floor: "Tiled", mi: 5, furnish: false, yoc: 49, price: 50, popularity: 0, area: 1700, age: 15 };
session.run(cypher, param5)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());
    
var session = driver.session();
const param6 = { name: "Kishan Villa", fid: "006", addr: "Digha Ashiana Road", city: "Patna", dist: "Patna", state: "Bihar", bed: 1, dwr: true, dnr: true, lr: true, kitchen: 1, abr: 1, sbr: 0, balcony: 1, floor: "Marbled", mi: 2, furnish: true, yoc: 99, price: 70, popularity: 0, area: 1700, age: 25 };
session.run(cypher, param6)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param7 = { name: "Swarg", fid: "007", addr: "Digha Ashiana Road", city: "Patna", dist: "Patna", state: "Bihar", bed: 1, dwr: true, dnr: true, lr: true, kitchen: 1, abr: 0, sbr: 1, balcony: 1, floor: "Marbled", mi: 2, furnish: true, yoc: 99, price: 500, popularity: 0, area: 2500, age: 15 };
session.run(cypher, param7)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param8 = { name: "Ajmal Manzil", fid: "008", addr: "Digha Ashiana Road", city: "Patna", dist: "Patna", state: "Bihar", bed: 2, dwr: false, dnr: true, lr: false, kitchen: 1, abr: 0, sbr: 1, balcony: 1, floor: "Tiled", mi: 7, furnish: false, yoc: 99, price: 50, popularity: 0, area: 1200, age: 12 };
session.run(cypher, param8)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param9 = { name: "Saquib Villa", fid: "009", addr: "Digha Ashiana Road", city: "Patna", dist: "Patna", state: "Bihar", bed: 3, dwr: true, dnr: true, lr: false, kitchen: 1, abr: 2, sbr: 0, balcony: 1, floor: "Tiled", mi: 10, furnish: true, yoc: 10, price: 45, popularity: 0, area: 3500, age: 2 };
session.run(cypher, param9)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param10 = { name: "Brindavani", fid: "011", addr: "Nila Campus, IIT PALAKKAD", city: "Palakkad", dist: "Palakkad", state: "Kerala", bed: 3, dwr: false, dnr: false, lr: false, kitchen: 0, abr: 0, sbr: 3, balcony: 1, floor: "Tiled", mi: 3, furnish: true, yoc: 5, price: 10, popularity: 0, area: 800, age: 3 };
session.run(cypher, param10)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param11 = { name: "Tilang", fid: "011", addr: "Nila Campus, IIT PALAKKAD", city: "Palakkad", dist: "Palakkad", state: "Kerala", bed: 3, dwr: false, dnr: true, lr: false, kitchen: 1, abr: 0, sbr: 3, balcony: 1, floor: "Tiled", mi: 3, furnish: true, yoc: 5, price: 10, popularity: 0, area: 800, age: 3 };
session.run(cypher, param11)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param12 = { name: "Ram Manohar", fid: "012", addr: "Sadar Patel Nagar, Police Line, Hirapur", city: "Dhanbad", dist: "Dhanbad", state: "Jharkhand", bed: 1, dwr: true, dnr: false, lr: false, kitchen: 1, abr: 0, sbr: 1, balcony: 1, floor: "Marbled", mi: 6, furnish: false, yoc: 10, price: 15, popularity: 0, area: 1700, age: 15 };
session.run(cypher, param12)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param13 = { name: "Pathan House", fid: "013", addr: "Bari dargah, Nawada", city: "Nawada", dist: "Nawada", state: "Bihar", bed: 3, dwr: false, dnr: true, lr: true, kitchen: 1, abr: 0, sbr: 2, balcony: 1, floor: "Cemented", mi: 10, furnish: true, yoc: 99, price: 20, popularity: 0, area: 800, age: 18 };
session.run(cypher, param13)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param14 = { name: "Bageshri", fid: "014", addr: "Nila Campus, IIT PALAKKAD", city: "Palakkad", dist: "Palakkad", state: "Kerala", bed: 3, dwr: false, dnr: false, lr: false, kitchen: 0, abr: 0, sbr: 3, balcony: 1, floor: "Tiled", mi: 3, furnish: true, yoc: 5, price: 10, popularity: 0, area: 800, age: 3 };
session.run(cypher, param14)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param15 = { name: "Hostel-1", fid: "015", addr: "Ahalia Campus, IIT PALAKKAD", city: "Palakkad", dist: "Palakkad", state: "Kerala", bed: 3, dwr: false, dnr: false, lr: false, kitchen: 0, abr: 0, sbr: 3, balcony: 1, floor: "Tiled", mi: 3, furnish: true, yoc: 5, price: 10, popularity: 0, area: 800, age: 3 };
session.run(cypher, param15)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param16 = { name: "Hostel-2", fid: "016", addr: "Ahalia Campus, IIT PALAKKAD", city: "Palakkad", dist: "Palakkad", state: "Kerala", bed: 3, dwr: false, dnr: false, lr: false, kitchen: 0, abr: 0, sbr: 3, balcony: 1, floor: "Tiled", mi: 3, furnish: true, yoc: 5, price: 10, popularity: 0, area: 800, age: 3 };
session.run(cypher, param16)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());
    
var session = driver.session();
const param17 = { name: "Hostel-3", fid: "017", addr: "Ahalia Campus, IIT PALAKKAD", city: "Palakkad", dist: "Palakkad", state: "Kerala", bed: 3, dwr: false, dnr: false, lr: false, kitchen: 0, abr: 0, sbr: 3, balcony: 1, floor: "Tiled", mi: 3, furnish: true, yoc: 5, price: 10, popularity: 0, area: 800, age: 3 };
session.run(cypher, param17)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());
    
var session = driver.session();
const param18 = { name: "Khan Manzil", fid: "018", addr: "Millat Colony, Bhadauni", city: "Nawada", dist: "Nawada", state: "Bihar", bed: 3, dwr: false, dnr: true, lr: true, kitchen: 1, abr: 0, sbr: 2, balcony: 1, floor: "Cemented", mi: 11, furnish: true, yoc: 25, price: 20, popularity: 0, area: 2500, age: 35 };
session.run(cypher, param18)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());
    
var session = driver.session();
const param19 = { name: "Ashrafi Manzil", fid: "019", addr: "Millat Colony, Bhadauni", city: "Nawada", dist: "Nawada", state: "Bihar", bed: 3, dwr: false, dnr: true, lr: true, kitchen: 1, abr: 0, sbr: 2, balcony: 1, floor: "Cemented", mi: 11, furnish: true, yoc: 10, price: 10, popularity: 0, area: 1800, age: 25 };
session.run(cypher, param19)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());
    
var session = driver.session();
const param20 = { name: "Sadar Cottage", fid: "020", addr: "Millat Colony, Bhadauni", city: "Nawada", dist: "Nawada", state: "Bihar", bed: 3, dwr: false, dnr: true, lr: true, kitchen: 1, abr: 0, sbr: 2, balcony: 1, floor: "Cemented", mi: 11, furnish: true, yoc: 45, price: 45, popularity: 0, area: 1800, age: 30 };
session.run(cypher, param20)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());
    
var session = driver.session();
const param21 = { name: "Secret House", fid: "021", addr: "Surang 007", city: "Tarwara", dist: "Siwan", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: false, kitchen: 1, abr: 2, sbr: 0, balcony: 1, floor: "Tiled", mi: 5, furnish: true, yoc: 10, price: 20, popularity: 0, area: 2200, age: 7 };
session.run(cypher, param21)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param22 = { name: "Lakshmi Niwas", fid: "022", addr: "Doctors colony, Kankarbagh", city: "Patna", dist: "Patna", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: false, kitchen: 1, abr: 1, sbr: 1, balcony: 1, floor: "Cemented", mi: 4, furnish: true, yoc: 25, price: 35, popularity: 0, area: 1500, age: 5 };
session.run(cypher, param22)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param23 = { name: "Aastha", fid: "023", addr: "Basatpur Bangla", city: "Chapra", dist: "Saran", state: "Bihar", bed: 3, dwr: true, dnr: false, lr: false, kitchen: 1, abr: 0, sbr: 2, balcony: 0, floor: "Cemented", mi: 5, furnish: false, yoc: 25, price: 25, popularity: 0, area: 1200, age: 12 };
session.run(cypher, param23)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param24 = { name: "Nilaya Home", fid: "024", addr: "Amnour", city: "Chapra", dist: "Saran", state: "Bihar", bed: 2, dwr: false, dnr: false, lr: false, kitchen: 1, abr: 0, sbr: 1, balcony: 0, floor: "Cemented", mi: 5, furnish: false, yoc: 10, price: 5, popularity: 0, area: 2000, age: 8 };
session.run(cypher, param24)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());
    
var session = driver.session();
const param25 = { name: "Kutumb", fid: "025", addr: "Amnour", city: "Chapra", dist: "Saran", state: "Bihar", bed: 2, dwr: true, dnr: false, lr: true, kitchen: 1, abr: 0, sbr: 1, balcony: 1, floor: "Tiled", mi: 10, furnish: true, yoc: 49, price: 25, popularity: 0, area: 1200, age: 5 };
session.run(cypher, param25)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param26 = { name: "Aashiyana", fid: "026", addr: "Amnour", city: "Chapra", dist: "Saran", state: "Bihar", bed: 3, dwr: true, dnr: false, lr: true, kitchen: 1, abr: 2, sbr: 1, balcony: 1, floor: "Tiled", mi: 10, furnish: true, yoc: 25, price: 30, popularity: 0, area: 1600, age: 6 };
session.run(cypher, param26)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());
    
var session = driver.session();
const param27 = { name: "Vaidehi Villa", fid: "027", addr: "Jamui Bazar", city: "Jamui", dist: "Jamui", state: "Bihar", bed: 2, dwr: false, dnr: true, lr: false, kitchen: 1, abr: 2, sbr: 0, balcony: 1, floor: "Cemented", mi: 10, furnish: false, yoc: 10, price: 15, popularity: 0, area: 3000, age: 26 };
session.run(cypher, param27)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param28 = { name: "Paaras", fid: "028", addr: "Amnour", city: "Chapra", dist: "Saran", state: "Bihar", bed: 3, dwr: true, dnr: false, lr: false, kitchen: 2, abr: 0, sbr: 2, balcony: 1, floor: "Cemented", mi: 12, furnish: false, yoc: 25, price: 15, popularity: 0, area: 1600, age: 26 };
session.run(cypher, param28)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param29 = { name: "Verma Niwas", fid: "029", addr: "Patri chowk", city: "Ara", dist: "Bhojpur", state: "Bihar", bed: 3, dwr: true, dnr: true, lr: true, kitchen: 2, abr: 2, sbr: 2, balcony: 2, floor: "Tiled", mi: 10, furnish: true, yoc: 49, price: 80, popularity: 0, area: 3000, age: 16 };
session.run(cypher, param29)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());
 
var session = driver.session();
const param30 = { name: "Dev Bhavan", fid: "030", addr: "Patri chowk", city: "Ara", dist: "Bhojpuran", state: "Bihar", bed: 3, dwr: false, dnr: true, lr: false, kitchen: 1, abr: 1, sbr: 1, balcony: 3, floor: "Cemented", mi: 17, furnish: false, yoc: 25, price: 30, popularity: 0, area: 2000, age: 9 };
session.run(cypher, param30)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());
 
var session = driver.session();
const param31 = { name: "Bhavan Home", fid: "031", addr: "Amnour", city: "Chapra", dist: "Saran", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: true, kitchen: 1, abr: 1, sbr: 1, balcony: 1, floor: "Tiled", mi: 7, furnish: true, yoc: 49, price: 20, popularity: 0, area: 700, age: 5 };
session.run(cypher, param31)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param32 = { name: "Shanti Mahal", fid: "032", addr: "Amnour", city: "Chapra", dist: "Saran", state: "Bihar", bed: 3, dwr: true, dnr: true, lr: true, kitchen: 1, abr: 2, sbr: 1, balcony: 2, floor: "Tiled", mi: 11, furnish: true, yoc: 99, price: 70, popularity: 0, area: 1500, age: 12 };
session.run(cypher, param32)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param33 = { name: "Amar Cottage", fid: "033", addr: "Vishwakarma Society, Near Chattauni Chowk", city: "Motihari", dist: "East Champaran", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: true, kitchen: 1, abr: 2, sbr: 0, balcony: 1, floor: "Tiled", mi: 6, furnish: true, yoc: 25, price: 10, popularity: 0, area: 600, age: 2 };
session.run(cypher, param33)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param34 = { name: "Subhani Cottage", fid: "034", addr: "Castle Dio, Modern Society", city: "Motihari", dist: "East Champaran", state: "Bihar", bed: 3, dwr: true, dnr: true, lr: true, kitchen: 1, abr: 3, sbr: 1, balcony: 2, floor: "Marbled", mi: 7, furnish: true, yoc: 25, price: 45, popularity: 0, area: 600, age: 2 };
session.run(cypher, param34)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param35 = { name: "Salman Cottage", fid: "035", addr: "Castle Dio, Modern Society", city: "Motihari", dist: "East Champaran", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: false, kitchen: 1, abr: 2, sbr: 1, balcony: 2, floor: "Marbled", mi: 5, furnish: true, yoc: 25, price: 40, popularity: 0, area: 600, age: 2 };
session.run(cypher, param35)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param36 = { name: "Ramu Cottage", fid: "036", addr: "Vishwakarma Society, Near Chattauni Chowk", city: "Motihari", dist: "East Champaran", state: "Bihar", bed: 3, dwr: true, dnr: true, lr: true, kitchen: 1, abr: 2, sbr: 1, balcony: 1, floor: "Tiled", mi: 10, furnish: true, yoc: 25, price: 40, popularity: 0, area: 1600, age: 12 };
session.run(cypher, param36)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param37 = { name: "Lalu Cottage", fid: "037", addr: "Castle Dio, Modern Society", city: "Motihari", dist: "East Champaran", state: "Bihar", bed: 1, dwr: true, dnr: true, lr: true, kitchen: 1, abr: 2, sbr: 0, balcony: 1, floor: "Marbledled", mi: 6, furnish: true, yoc: 25, price: 10, popularity: 0, area: 600, age: 2 };
session.run(cypher, param37)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param38 = { name: "Rabri Cottage", fid: "038", addr: "Vishwakarma Society, Near Chattauni Chowk", city: "Motihari", dist: "East Champaran", state: "Bihar", bed: 1, dwr: true, dnr: true, lr: false, kitchen: 1, abr: 0, sbr: 1, balcony: 1, floor: "Tiled", mi: 4, furnish: true, yoc: 25, price: 30, popularity: 0, area: 2600, age: 20 };
session.run(cypher, param38)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param39 = { name: "Jitendra Cottage", fid: "039", addr: "Vishwakarma Society, Near Chattauni Chowk", city: "Motihari", dist: "East Champaran", state: "Bihar", bed: 2, dwr: true, dnr: true, lr: false, kitchen: 3, abr: 3, sbr: 3, balcony: 3, floor: "Marbled", mi: 15, furnish: true, yoc: 25, price: 35, popularity: 0, area: 2600, age: 2 };
session.run(cypher, param39)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());
    
var session = driver.session();
const param40 = { name: "T 19", fid: "040", addr: "CMPDI Kanke", city: "Ranchi", dist: "Ranchi", state: "Jharkhand", bed: 3, dwr: true, dnr: true, lr: true, kitchen: 1, abr: 3, sbr: 3, balcony: 3, floor: "Marbled", mi: 10, furnish: true, yoc: 10, price: 19, popularity: 0, area: 1700, age: 15 };
session.run(cypher, param40)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());


var session = driver.session();
const param41 = { name: "Arman Home", fid: "041", addr: "Millat Colony, Bhadauni", city: "Nawada", dist: "Nawada", state: "Bihar", bed: 3, dwr: false, dnr: true, lr: true, kitchen: 1, abr: 0, sbr: 1, balcony: 0, floor: "Cemented", mi: 11, furnish: true, yoc: 10, price: 8, popularity: 0, area: 1800, age: 35 };
session.run(cypher, param41)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param42 = { name: "Shamsher Manzil", fid: "042", addr: "Millat Colony, Bhadauni", city: "Nawada", dist: "Nawada", state: "Bihar", bed: 2, dwr: false, dnr: true, lr: true, kitchen: 1, abr: 0, sbr: 2, balcony: 0, floor: "Cemented", mi: 8, furnish: true, yoc: 10, price: 12, popularity: 0, area: 1800, age: 10 };
session.run(cypher, param42)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param43 = { name: "Gilani House", fid: "043", addr: "Millat Colony, Bhadauni", city: "Nawada", dist: "Nawada", state: "Bihar", bed: 3, dwr: true, dnr: true, lr: true, kitchen: 1, abr: 1, sbr: 2, balcony: 0, floor: "Cemented", mi: 11, furnish: true, yoc: 10, price: 8, popularity: 0, area: 1800, age: 30 };
session.run(cypher, param43)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());

var session = driver.session();
const param44 = { name: "Aslam Manzil", fid: "044", addr: "Millat Colony, Bhadauni", city: "Nawada", dist: "Nawada", state: "Bihar", bed: 3, dwr: false, dnr: true, lr: true, kitchen: 1, abr: 0, sbr: 2, balcony: 0, floor: "Cemented", mi: 11, furnish: true, yoc: 25, price: 20, popularity: 0, area: 1600, age: 35 };
session.run(cypher, param44)
    .then(function (result) {
        console.log("Flat id " + result.records[0].get("n.FID") + " is added to database");
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(() => session.close());
