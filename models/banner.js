const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bannerSchema = new Schema({
  imageUrl: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  bannerUrl: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Banner', bannerSchema);

// const mongodb = require('mongodb');
// const getDb = require('../util/database').getDb;

// class Banner {
//   constructor(imageUrl, title, description, bannerUrl, id) {
//     this.imageUrl = imageUrl;
//     this.title = title;
//     this.description = description;
//     this.bannerUrl = bannerUrl;
//     this._id = id ? new mongodb.ObjectId(id) : null;
//   }

//   save() {
//     const db = getDb();
//     let dbOp;
//     if (this._id) {
//       // Update the banner
//       dbOp = db
//         .collection('banners')
//         .updateOne({ _id: this._id }, { $set: this });
//     } else {
//       dbOp = db.collection('banners').insertOne(this);
//     }
//     return dbOp
//       .then(result => {
//         console.log(result);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

//   static fetchAll() {
//     const db = getDb();
//     return db
//       .collection('banners')
//       .find()
//       .toArray()
//       .then(banners => {
//         // console.log(banners);
//         return banners;
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

//   static findById(bannerId) {
//     const db = getDb();
//     return db
//       .collection('banners')
//       .find({ _id: new mongodb.ObjectId(bannerId) })
//       .next()
//       .then(banner => {
//         // console.log(banner);
//         return banner;
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

//   static deleteById(bannerId) {
//     const db = getDb();
//     return db
//       .collection('banners')
//       .deleteOne({ _id: new mongodb.ObjectId(bannerId) })
//       .then(result => {
//         // console.log('Deleted');
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
// }

// module.exports = Banner;
