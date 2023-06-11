const mongoose  =  require("mongoose")
require("dotenv").config()
const connection = mongoose.connect(`${process.env.MONGO_URL}`)

module.exports = connection

 
// [
//     {
//       "isBooked":false,
//       "seatNo":1
//     },
//     {
//       "isBooked":false,
//       "seatNo":2
//     },
//     {
//       "isBooked":false,
//       "seatNo":3
//     },
//     {
//       "isBooked":false,
//       "seatNo":4
//     },
//     {
//       "isBooked":false,
//       "seatNo":5
//     },
//     {
//       "isBooked":false,
//       "seatNo":6
//     },
//     {
//       "isBooked":false,
//       "seatNo":7
//     },
//     {
//       "isBooked":false,
//       "seatNo":8
//     },
//     {
//       "isBooked":false,
//       "seatNo":9
//     },
//     {
//       "isBooked":false,
//       "seatNo":10
//     },
//     {
//       "isBooked":false,
//       "seatNo":11
//     },
//     {
//       "isBooked":false,
//       "seatNo":12
//     },
//     {
//       "isBooked":false,
//       "seatNo":13
//     },
//     {
//       "isBooked":false,
//       "seatNo":14
//     },
//     {
//       "isBooked":false,
//       "seatNo":15
//     },
//     {
//       "isBooked":false,
//       "seatNo":16
//     },
//     {
//       "isBooked":false,
//       "seatNo":17
//     },
//     {
//       "isBooked":false,
//       "seatNo":18
//     },
//     {
//       "isBooked":false,
//       "seatNo":19
//     },
//     {
//       "isBooked":false,
//       "seatNo":20
//     },
//     {
//       "isBooked":false,
//       "seatNo":21
//     },
//     {
//       "isBooked":false,
//       "seatNo":22
//     },
//     {
//       "isBooked":false,
//       "seatNo":23
//     },
//     {
//       "isBooked":false,
//       "seatNo":24
//     },
//     {
//       "isBooked":false,
//       "seatNo":25
//     },
//     {
//       "isBooked":false,
//       "seatNo":26
//     },
//     {
//       "isBooked":false,
//       "seatNo":27
//     },
//     {
//       "isBooked":false,
//       "seatNo":28
//     },
//     {
//       "isBooked":false,
//       "seatNo":29
//     },
//     {
//       "isBooked":false,
//       "seatNo":30
//     },
//     {
//       "isBooked":false,
//       "seatNo":31
//     },
//     {
//       "isBooked":false,
//       "seatNo":32
//     },
//     {
//       "isBooked":false,
//       "seatNo":33
//     },
//     {
//       "isBooked":false,
//       "seatNo":34
//     },
//     {
//       "isBooked":false,
//       "seatNo":35
//     },
//     {
//       "isBooked":false,
//       "seatNo":36
//     },
//     {
//       "isBooked":false,
//       "seatNo":37
//     },
//     {
//       "isBooked":false,
//       "seatNo":38
//     },
//     {
//       "isBooked":false,
//       "seatNo":39
//     },
//     {
//       "isBooked":false,
//       "seatNo":40
//     },
//     {
//       "isBooked":false,
//       "seatNo":41
//     },
//     {
//       "isBooked":false,
//       "seatNo":42
//     },
//     {
//       "isBooked":false,
//       "seatNo":43
//     },
//     {
//       "isBooked":false,
//       "seatNo":44
//     },
//     {
//       "isBooked":false,
//       "seatNo":45
//     },
//     {
//       "isBooked":false,
//       "seatNo":46
//     },
//     {
//       "isBooked":false,
//       "seatNo":47
//     },
//     {
//       "isBooked":false,
//       "seatNo":48
//     },
//     {
//       "isBooked":false,
//       "seatNo":49
//     },
//     {
//       "isBooked":false,
//       "seatNo":50
//     },
//     {
//       "isBooked":false,
//       "seatNo":51
//     },
//     {
//       "isBooked":false,
//       "seatNo":52
//     },
//     {
//       "isBooked":false,
//       "seatNo":53
//     },
//     {
//       "isBooked":false,
//       "seatNo":54
//     },
//     {
//       "isBooked":false,
//       "seatNo":55
//     },
//     {
//       "isBooked":false,
//       "seatNo":56
//     },
//     {
//       "isBooked":false,
//       "seatNo":57
//     },
//     {
//       "isBooked":false,
//       "seatNo":58
//     },
//     {
//       "isBooked":false,
//       "seatNo":59
//     },
//     {
//       "isBooked":false,
//       "seatNo":60
//     },
//     {
//       "isBooked":false,
//       "seatNo":61
//     },
//     {
//       "isBooked":false,
//       "seatNo":62
//     },
//     {
//       "isBooked":false,
//       "seatNo":63
//     },
//     {
//       "isBooked":false,
//       "seatNo":64
//     },
//     {
//       "isBooked":false,
//       "seatNo":65
//     },
//     {
//       "isBooked":false,
//       "seatNo":66
//     },
//     {
//       "isBooked":false,
//       "seatNo":67
//     },
//     {
//       "isBooked":false,
//       "seatNo":68
//     },
//     {
//       "isBooked":false,
//       "seatNo":69
//     },
//     {
//       "isBooked":false,
//       "seatNo":70
//     },
//     {
//       "isBooked":false,
//       "seatNo":71
//     },
//     {
//       "isBooked":false,
//       "seatNo":72
//     },
//     {
//       "isBooked":false,
//       "seatNo":73
//     },
//     {
//       "isBooked":false,
//       "seatNo":74
//     },
//     {
//       "isBooked":false,
//       "seatNo":75
//     },
//     {
//       "isBooked":false,
//       "seatNo":76
//     },
//     {
//       "isBooked":false,
//       "seatNo":77
//     },
//     {
//       "isBooked":false,
//       "seatNo":78
//     },
//     {
//       "isBooked":false,
//       "seatNo":79
//     },
//     {
//       "isBooked":false,
//       "seatNo":80
//     }
//   ]
    