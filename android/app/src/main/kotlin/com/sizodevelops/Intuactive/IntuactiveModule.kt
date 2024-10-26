package com.sizodevelops.Intuactive

import android.content.Context
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class IntuactiveModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    
    private val healthConnectManager: HealthConnectManager = HealthConnectManager(reactContext)

    override fun getName(): String {
        return "Intuactive"
    }

    @ReactMethod
    fun readHeartRateData(promise: Promise) {
        // Call your Kotlin method and handle the result
        healthConnectManager.readHeartRateData { heartRateData, error ->
            if (error != null) {
                promise.reject("ERROR", error)
            } else {
                promise.resolve(heartRateData)
            }
        }
    }

    @ReactMethod
    fun getSleepAnalysis(promise: Promise) {
        healthConnectManager.getSleepAnalysis { sleepAnalysis, error ->
            if (error != null) {
                promise.reject("ERROR", error)
            } else {
                promise.resolve(sleepAnalysis)
            }
        }
    }


    @ReactMethod
    fun readBloodPressureData(promise: Promise) {
        healthConnectManager.readBloodPressureData { bloodPressureData, error ->
            if (error != null) {
                promise.reject("ERROR", error)
            } else {
                promise.resolve(bloodPressureData)
            }
        }
    }

    @ReactMethod
    fun readBloodOxygenData(promise: Promise) {
        healthConnectManager.readBloodOxygenData { bloodOxygenData, error ->
            if (error != null) {
                promise.reject("ERROR", error)
            } else {
                promise.resolve(bloodOxygenData)
            }
        }
    }
}
