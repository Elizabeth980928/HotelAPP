



// <Animated.View>
// <BottomSheet hasDraggableIcon ref={bottomSheet} height={600}>
//   <SafeAreaView>
//     <View style={style.container}>
//       <View style={style.backBox}>
//         {/* <View style={style.search}>
//      <Text style={{ fo
//      ntWeight: "bold" }}>search room</Text>
//      </View> */}

//         <View style={style.checkin}>
//           <Text style={style.checkInText}>CheckIn</Text>

//           <View>
//             <DatePicker
//               style={{ width: 165 }}
//               date={date}
//               mode="date"
//               // placeholder="check in"
//               format="YYYY-MM-DD"
//               // minDate="0"
//               // maxDate="0"
//               confirmBtnText="Confirm"
//               cancelBtnText="Cancel"
//               customStyles={{
//                 dateIcon: {
//                   position: "absolute",
//                   left: 0,
//                   top: 4,
//                   marginLeft: 0,
//                 },
//                 dateInput: {
//                   marginLeft: 36,
//                 },
//                 // ... You can check the source to find the other keys.
//               }}
//               onDateChange={(date) => {
//                 setDate(date);
//               }}
//             />
//           </View>
//         </View>
//         <View style={style.checkOut}>
//           <Text style={style.checkOutText}>CheckOut</Text>
//           <DatePicker
//             style={style.datePicker}
//             style={{ width: 165 }}
//             date={date}
//             mode="date"
//             // placeholder="select date"
//             format="YYYY-MM-DD"
//             // minDate="2016-05-01"
//             // maxDate="2016-06-01"
//             confirmBtnText="Confirm"
//             cancelBtnText="Cancel"
//             customStyles={{
//               dateIcon: {
//                 position: "absolute",
//                 left: 0,
//                 top: 4,
//                 marginLeft: 0,
//               },
//               dateInput: {
//                 marginLeft: 36,
//               },
//               // ... You can check the source to find the other keys.
//             }}
//             onDateChange={(date) => {
//               setDate(date);
//             }}
//           />
//         </View>

//         <View
//           style={{
//             flexDirection: "column",
//             marginTop: 20,
//             width: "90%",
//             backgroundColor: "grey",
//             borderRadius: 10,
//             marginLeft: 16,
//             padding: 20,
//           }}
//         >
//           <View style={style.room}>
//             <Text style={style.roomText}>No.Rooms </Text>
//             <View
//               style={{
//                 flexDirection: "row",
//                 justifyContent: "space-between",
//                 borderRadius: 10,
//                 padding: 10,
//                 width: 90,
//                 alignItems: "center",
//                 backgroundColor: "white",
//               }}
//             >
//               <Pressable
//                 style={[
//                   style.btnadd,
//                   {
//                     backgroundColor: "white",
//                     flexDirection: "row",
//                   },
//                 ]}
//                 onPress={() =>
//                   setChildPlus(Math.max(1, childPlus - 1))
//                 }
//               >
//                 <Feather name="minus" size={22} color="black" />
//               </Pressable>
//               <Text style={{ fontsize: 21 }}> {childPlus}</Text>

//               <Pressable
//                 style={[
//                   style.btnadd,
//                   {
//                     backgroundColor: "white",
//                     flexDirection: "row",
//                   },
//                 ]}
//                 onPress={() =>
//                   setChildPlus(Math.max(1, audultPlus + 1))
//                 }
//               >
//                 <Feather name="plus" size={22} color="black" />
//               </Pressable>
//             </View>
//           </View>

//           <View style={style.room}>
//             <Text style={style.roomText}>No.Adult </Text>
//             <View
//               style={{
//                 flexDirection: "row",
//                 justifyContent: "space-between",
//                 borderRadius: 10,
//                 padding: 10,
//                 width: 90,
//                 alignItems: "center",
//                 backgroundColor: "white",
//               }}
//             >
//               <Pressable
//                 style={[
//                   style.btnadd,
//                   {
//                     backgroundColor: "white",
//                     flexDirection: "row",
//                   },
//                 ]}
//                 onPress={() =>
//                   setChildPlus(Math.max(1, childPlus - 1))
//                 }
//               >
//                 <Feather name="minus" size={22} color="black" />
//               </Pressable>
//               <Text style={{ fontsize: 21 }}> {childPlus}</Text>

//               <Pressable
//                 style={[
//                   style.btnadd,
//                   {
//                     backgroundColor: "white",
//                     flexDirection: "row",
//                   },
//                 ]}
//                 onPress={() =>
//                   setChildPlus(Math.max(1, audultPlus + 1))
//                 }
//               >
//                 <Feather name="plus" size={22} color="black" />
//               </Pressable>
//             </View>
//           </View>

//           <View style={style.room}>
//             <Text style={style.roomText}>No.Children</Text>
//             <View
//               style={{
//                 flexDirection: "row",
//                 justifyContent: "space-between",
//                 borderRadius: 10,
//                 padding: 10,
//                 width: 90,
//                 alignItems: "center",
//                 backgroundColor: "white",
//               }}
//             >
//               <Pressable
//                 style={[
//                   style.btnadd,
//                   {
//                     backgroundColor: "white",
//                     flexDirection: "row",
//                   },
//                 ]}
//                 onPress={() =>
//                   setChildPlus(Math.max(1, childPlus - 1))
//                 }
//               >
//                 <Feather name="minus" size={22} color="black" />
//               </Pressable>
//               <Text style={{ fontsize: 21 }}> {childPlus}</Text>

//               <Pressable
//                 style={[
//                   style.btnadd,
//                   {
//                     backgroundColor: "white",
//                     flexDirection: "row",
//                   },
//                 ]}
//                 onPress={() =>
//                   setChildPlus(Math.max(1, audultPlus + 1))
//                 }
//               >
//                 <Feather name="plus" size={22} color="black" />
//               </Pressable>
//             </View>
//           </View>

          {/* <View style={style.room}>
  <Text style={style.roomText}>Children</Text>
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      borderRadius: 10,
      padding: 10,
      width: 90,
      alignItems: "center",
      backgroundColor: "white",
    }}
  >
    <Pressable
      style={[
        style.btnadd,
        { backgroundColor: "white", flexDirection: "row" },
      ]}
      onPress={() => setRoomPlus(Math.max(1, roomPlus + 1))}
    >
      <Feather name="plus" size={22} color="black" />
    </Pressable>
    <Text style={{ fontsize: 21 }}> {audultPlus}</Text>
    <Pressable
      style={[
        style.btnadd,
        { backgroundColor: "white", flexDirection: "row" },
      ]}
      onPress={() => setRoomPlus(Math.max(1, roomPlus - 1))}
    >
      <Feather name="minus" size={22} color="black" />
    </Pressable>
  </View>
</View> */}
        {/* </View>
      </View>
      <TouchableOpacity
        style={style.bookNow}
        onPress={() => navigation.navigate("DetailsScreen")}
      >
        <Text style={style.bookText}>Search Room</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
</BottomSheet>
</Animated.View> */}