import { View, Text, SafeAreaView, StatusBar, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { theme } from '../theme'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { CalendarDaysIcon, MapPinIcon } from 'react-native-heroicons/solid'

export default function HomeScreen() {
    const [showsearch, toggleSearch] = useState(false)
    const [location,setLocation]=useState([1,2,3])

    const handleLocation=(loc)=>{
        console.log('location: ',loc)
    }

    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <StatusBar barStyle={"light-content"} />
            <Image blurRadius={65} source={require('../assets/images/bg.png')}
                className="absolute h-full w-full"
            />
            <SafeAreaView className="flex flex-1">
                {/* search city */}
                <View style={{ height: '7%' }} className="mx-4 relative z-50">
                    <View className="flex-row justify-end items-center rounded-full"
                        style={{ backgroundColor: showsearch?theme.bgWhite(0.2):'transparent' }}>
                        {
                            showsearch ? (<TextInput placeholder='Search City' placeholderTextColor={'lightgray'}
                                className="pl-6 h-12 flex-1 text-base text-white"
                            />
                            ) : null
                        }

                        <TouchableOpacity
                        onPress={()=>toggleSearch(!showsearch)}
                            style={{ backgroundColor: theme.bgWhite(0.3) }}
                            className="rounded-full p-3 m-1"
                        >
                            <MagnifyingGlassIcon size="22" color="white" />

                        </TouchableOpacity>
                        </View>
                            {
                                location.length>0 && showsearch?(
                                  <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
                                    {
                                        location.map((loc,index)=>{
                                            let showBorder=index+1!=location.length
                                            let borderClass = showBorder? 'border-b-2 border-b-gray-400':''
                                            return(
                                                <TouchableOpacity
                                                onPress={()=>handleLocation(loc)}
                                                key={index}
                                                className={"flex-row items-center border-0 p-3 px-4 mb-1 "+borderClass}
                                                >
                                                    <MapPinIcon size="20" color="gray" />
                                                    <Text className="text-black text-lg ml-2" >London,UK</Text>
                                                </TouchableOpacity>
                                            )
                                        })
                                    }
                                  </View>
                                ):null
                            }
                    
                </View>
                {/* Forecast section */}
                <View className="mx-4 flex justify-around flex-1 mb-2">
                    {/* location */}
                    <Text className="text-white text-center text-2xl font-bold">
                        London,
                        <Text className="text-lg font-semibold text-xl text-gray-300">
                            United Kingdom
                        </Text>
                    </Text>
                    {/* weather image */}
                    <View className="flex-row justify-center">
                        <Image source={require('../assets/images/partlycloudy.png')}
                        className="w-52 h-52"
                        ></Image>
                    </View>

                    <View className="space-y-2" >
                        <Text className="text-center font-bold text-white text-4xl ml-5">23&#176;</Text>
                        <Text className="text-center  text-white text-xl tracking-widest">Partly Cloudy</Text>
                    </View>
                    <View className="flex-row justify-between mx-4" >
                        <View className="flex-row space-x-2 items-center" >
                            <Image source={require('../assets/icons/wind.png')}
                                    className="h-6 w-6"
                            ></Image>
                            <Text className="text-white font-semibold text-base">22km</Text>
                        </View>
                        <View className="flex-row space-x-2 items-center" >
                            <Image source={require('../assets/icons/drop.png')}
                                    className="h-6 w-6"
                            ></Image>
                            <Text className="text-white font-semibold text-base">23%</Text>
                        </View>
                        <View className="flex-row space-x-2 items-center" >
                            <Image source={require('../assets/icons/sun.png')}
                                    className="h-6 w-6"
                            ></Image>
                            <Text className="text-white font-semibold text-base">6:00 AM</Text>
                        </View>
                    </View>
                </View>
                {/* forecast for other days */}
                <View className="mb-10 space-y-3" >
                    <View className="flex-row items-center mx-5 space-x-2" >
                        <CalendarDaysIcon size="24" color="white" />
                        <Text className="text-white text-base">Daily forecast</Text>
                    </View>
                    <ScrollView
                      horizontal
                      contentContainerStyle={{paddingHorizontal:15}}
                      showsHorizontalScrollIndicator={false}
                      >
                        <View className="flex justify-center items-center w-20 rounded-3xl space-y-1 mr-4"
                            style={{backgroundColor:theme.bgWhite(0.15)}}
                        >
                            <Image source={require('../assets/images/heavyrain.png')} className="h-11 w-11" />
                            <Text className="text-white" >Monday</Text>
                            <Text className="text-white font-semibold text-xl" >23&#176;</Text>
                        </View>

                        <View className="flex justify-center items-center w-20 rounded-3xl space-y-1 mr-4"
                            style={{backgroundColor:theme.bgWhite(0.15)}}
                        >
                            <Image source={require('../assets/images/heavyrain.png')} className="h-11 w-11" />
                            <Text className="text-white" >Tuesday</Text>
                            <Text className="text-white font-semibold text-xl" >23&#176;</Text>
                        </View>
                        <View className="flex justify-center items-center w-20 rounded-3xl space-y-1 mr-4"
                            style={{backgroundColor:theme.bgWhite(0.15)}}
                        >
                            <Image source={require('../assets/images/heavyrain.png')} className="h-11 w-11" />
                            <Text className="text-white" >Wednesday</Text>
                            <Text className="text-white font-semibold text-xl" >23&#176;</Text>
                        </View>

                        <View className="flex justify-center items-center w-20 rounded-3xl space-y-1 mr-4"
                            style={{backgroundColor:theme.bgWhite(0.15)}}
                        >
                            <Image source={require('../assets/images/heavyrain.png')} className="h-11 w-11" />
                            <Text className="text-white" >Thursday</Text>
                            <Text className="text-white font-semibold text-xl" >23&#176;</Text>
                        </View>

                        <View className="flex justify-center items-center w-20 rounded-3xl space-y-1 mr-4"
                            style={{backgroundColor:theme.bgWhite(0.15)}}
                        >
                            <Image source={require('../assets/images/heavyrain.png')} className="h-11 w-11" />
                            <Text className="text-white" >Friday</Text>
                            <Text className="text-white font-semibold text-xl" >23&#176;</Text>
                        </View>
                        <View className="flex justify-center items-center w-20 rounded-3xl space-y-1 mr-4"
                            style={{backgroundColor:theme.bgWhite(0.15)}}
                        >
                            <Image source={require('../assets/images/heavyrain.png')} className="h-11 w-11" />
                            <Text className="text-white" >Saturday</Text>
                            <Text className="text-white font-semibold text-xl" >23&#176;</Text>
                        </View>
                        <View className="flex justify-center items-center w-20 rounded-3xl space-y-1 mr-4"
                            style={{backgroundColor:theme.bgWhite(0.15)}}
                        >
                            <Image source={require('../assets/images/heavyrain.png')} className="h-11 w-11" />
                            <Text className="text-white" >Sunday</Text>
                            <Text className="text-white font-semibold text-xl" >23&#176;</Text>
                        </View>


                      </ScrollView>

                </View>
            </SafeAreaView>

        </View>
    )
}