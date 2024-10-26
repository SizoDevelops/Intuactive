package com.sizodevelops.Intuactive

import android.content.Context
import androidx.health.connect.client.HealthConnectClient
import androidx.health.connect.client.records.HeartRate
import androidx.health.connect.client.records.SleepSession
import androidx.health.connect.client.records.BloodPressure
import androidx.health.connect.client.records.BloodOxygen
import androidx.health.connect.client.request.ReadRequest
import androidx.health.connect.client.time.TimeRangeFilter
import com.google.android.gms.tasks.Task

class HealthConnectManager(private val context: Context) {
    private val client: HealthConnectClient by lazy {
        HealthConnectClient.getClient(context)
    }

    fun readHeartRateData(callback: (List<HeartRate>) -> Unit): Task<List<HeartRate>> {
        val readRequest = ReadRequest.Builder()
            .addDataType(HeartRate::class)
            .setTimeRangeFilter(TimeRangeFilter.THIS_WEEK)
            .build()

        return client.readData(readRequest)
            .addOnSuccessListener { result ->
                callback(result) // Send heart rate data to the callback
            }
            .addOnFailureListener { exception ->
                // Handle errors (optional: call callback with empty list or error message)
            }
    }

    fun readSleepData(callback: (List<SleepSession>) -> Unit): Task<List<SleepSession>> {
        val readRequest = ReadRequest.Builder()
            .addDataType(SleepSession::class)
            .setTimeRangeFilter(TimeRangeFilter.THIS_WEEK)
            .build()

        return client.readData(readRequest)
            .addOnSuccessListener { result ->
                callback(result) // Send sleep data to the callback
            }
            .addOnFailureListener { exception ->
                // Handle errors (optional: call callback with empty list or error message)
            }
    }

    fun readBloodPressureData(callback: (List<BloodPressure>) -> Unit): Task<List<BloodPressure>> {
        val readRequest = ReadRequest.Builder()
            .addDataType(BloodPressure::class)
            .setTimeRangeFilter(TimeRangeFilter.THIS_WEEK)
            .build()

        return client.readData(readRequest)
            .addOnSuccessListener { result ->
                callback(result) // Send blood pressure data to the callback
            }
            .addOnFailureListener { exception ->
                // Handle errors (optional: call callback with empty list or error message)
            }
    }

    /**
     * Reads blood oxygen data from the Health Connect service, filtered by this week.
     *
     * @param callback a callback function that will receive the blood oxygen data or an empty list if there is an error
     * @return a Task that resolves when the data is read
     */
    fun readBloodOxygenData(callback: (List<BloodOxygen>) -> Unit): Task<List<BloodOxygen>> {
        val readRequest = ReadRequest.Builder()
            .addDataType(BloodOxygen::class)
            .setTimeRangeFilter(TimeRangeFilter.THIS_WEEK)
            .build()

        return client.readData(readRequest)
            .addOnSuccessListener { result ->
                callback(result) // Send blood oxygen data to the callback
            }
            .addOnFailureListener { exception ->
                // Handle errors (optional: call callback with empty list or error message)

            }
    }
}
