import { Injectable } from '@angular/core';
import { vehicle } from './vehicle';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
vehicles: vehicle[]= [
    // Car
    {
      vehicleId: 1,
      vehicleName: "Swift",
      vehicleCompany: "Maruti Suzuki",
      vehiclePrice: 600000,
      availableTime: "9:00 AM - 6:00 PM",
      fuelType: "Petrol",
      seatingCapacity: 5,
      vehicleType: "Car",
      vehicleImage: "https://mda.spinny.com/sp-file-system/public/2024-08-26/786b220c60db4b34b82fbb93e0e2cdbd/file.JPG?q=85&w=350",
      rating: 4.5
    },
    {
      vehicleId: 2,
      vehicleName: "City",
      vehicleCompany: "Honda",
      vehiclePrice: 1000000,
      availableTime: "8:00 AM - 5:00 PM",
      fuelType: "Diesel",
      seatingCapacity: 5,
      vehicleType: "Car",
      vehicleImage: "https://mda.spinny.com/sp-file-system/public/2024-10-24/508c9222e5334671a3cf43ce2fa99255/file.JPG?q=85&w=350",
      rating: 4.7
    },
    {
      vehicleId: 3,
      vehicleName: "Creta",
      vehicleCompany: "Hyundai",
      vehiclePrice: 1200000,
      availableTime: "7:00 AM - 7:00 PM",
      fuelType: "Petrol",
      seatingCapacity: 7,
      vehicleType: "Car",
      vehicleImage: "https://lh6.googleusercontent.com/proxy/b461EPO_xtP15K0G83T9d636er5Pbo-RKcLeM1h77q1rFxbIVQlpd1GMxRniq1PKt6QQotE54W3ckc8v_A",
      rating: 4.6
    },
    {
      vehicleId: 4,
      vehicleName: "Fortuner",
      vehicleCompany: "Toyota",
      vehiclePrice: 3000000,
      availableTime: "9:00 AM - 8:00 PM",
      fuelType: "Diesel",
      seatingCapacity: 7,
      vehicleType: "Car",
      vehicleImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_OP9TZ0iDuVeo4LKhdSaeR8k1GBkGCzu0g&s",
      rating: 4.8
    },
    {
      vehicleId: 5,
      vehicleName: "Kwid",
      vehicleCompany: "Renault",
      vehiclePrice: 500000,
      availableTime: "8:00 AM - 6:00 PM",
      fuelType: "Petrol",
      seatingCapacity: 5,
      vehicleType: "Car",
      vehicleImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzDhN6PT71Exuhr6j6KayhENg5ofz4iXGR1A&s",
      rating: 4.3
    },
    {
      vehicleId: 6,
      vehicleName: "Thar",
      vehicleCompany: "Mahindra",
      vehiclePrice: 1500000,
      availableTime: "10:00 AM - 5:00 PM",
      fuelType: "Diesel",
      seatingCapacity: 5,
      vehicleType: "Car",
      vehicleImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAP9LkMLQ7w0yuJWW_tVH4mAe4K1_lf-gcOw&s",
      rating: 4.9
    },
  
    // Bikes
    {
      vehicleId: 7,
      vehicleName: "Splendor Plus",
      vehicleCompany: "Hero",
      vehiclePrice: 70000,
      availableTime: "7:00 AM - 9:00 PM",
      fuelType: "Petrol",
      seatingCapacity: 2,
      vehicleType: "Bike",
      vehicleImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsiZpgDe57iogGoW2LDCFY8lk1_6g-yydNmQ&s",
      rating: 4.2
    },
    {
      vehicleId: 8,
      vehicleName: "Pulsar 150",
      vehicleCompany: "Bajaj",
      vehiclePrice: 90000,
      availableTime: "6:00 AM - 10:00 PM",
      fuelType: "Petrol",
      seatingCapacity: 2,
      vehicleType: "Bike",
      vehicleImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUXDjGy8ctcMaPXMsED_E3O74OdhBvb6GfQ&s",
      rating: 4.5
    },
    {
      vehicleId: 9,
      vehicleName: "FZ S V3",
      vehicleCompany: "Yamaha",
      vehiclePrice: 110000,
      availableTime: "8:00 AM - 8:00 PM",
      fuelType: "Petrol",
      seatingCapacity: 2,
      vehicleType: "Bike",
      vehicleImage: "https://imgd.aeplcdn.com/272x153/n/cw/ec/124013/hunter-350-right-side-view-5.png?isig=0&q=80",
      rating: 4.6
    },
    {
      vehicleId: 10,
      vehicleName: "Duke 250",
      vehicleCompany: "KTM",
      vehiclePrice: 200000,
      availableTime: "9:00 AM - 6:00 PM",
      fuelType: "Petrol",
      seatingCapacity: 2,
      vehicleType: "Bike",
      vehicleImage: "https://media.zigcdn.com/media/model/2024/Apr/yamaha-mt15-v2-right-side-view_270x180.jpg",
      rating: 4.7
    },
    {
      vehicleId: 11,
      vehicleName: "Bullet 350",
      vehicleCompany: "Royal Enfield",
      vehiclePrice: 160000,
      availableTime: "10:00 AM - 7:00 PM",
      fuelType: "Petrol",
      seatingCapacity: 2,
      vehicleType: "Bike",
      vehicleImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHpLaSCN8bEd1SCRKW83mZdvRPOrinEKzBg&s",
      rating: 4.8
    },
    {
      vehicleId: 12,
      vehicleName: "Apache RTR 160",
      vehicleCompany: "TVS",
      vehiclePrice: 95000,
      availableTime: "8:00 AM - 6:00 PM",
      fuelType: "Petrol",
      seatingCapacity: 2,
      vehicleType: "Bike",
      vehicleImage: "https://i.ytimg.com/vi/CQNmO-XNkoY/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgWihUMA8=&rs=AOn4CLDX0dIj2v9MIIO_eRnbQa3OxDMNUQ",
      rating: 4.4
    }
  ];

  constructor() { }
  getAllVehicles(){
    return of (this.vehicles);
  }
  addVehicle(newvehicle: any){
    this.vehicles.push(newvehicle );
    return "added"
  }
  getVehicleById(id:any){
    return this.vehicles.find(vehicle=>vehicle.vehicleId==id);
  }
  deleteVehicles(id:any){
    let index=this.vehicles.findIndex(vehicle=>vehicle.vehicleId==id)
    this.vehicles.splice(index,1);
    return "deleted";
  }
    updateVehicle(id:any,newvehicle:any){
      let index=this.vehicles.findIndex(vehicle=>vehicle.vehicleId==id)
     this.vehicles.splice(index,1,newvehicle);
     return"updated";
        }
        getBikes(){
          return of(this.vehicles.filter(vehicle=>vehicle.vehicleType=="Bike"));
        }
        getCars(){
          return of(this.vehicles.filter(vehicle=>vehicle.vehicleType=="Car"));
        }
      

  }

