import { View, Text, SafeAreaView, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { theme } from '../theme'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { MapPinIcon } from 'react-native-heroicons/solid'

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
            </SafeAreaView>

        </View>
    )
}