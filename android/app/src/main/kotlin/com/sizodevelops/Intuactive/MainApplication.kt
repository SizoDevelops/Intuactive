package com.sizodevelops.Intuactive

import android.app.Application
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.soloader.SoLoader
import java.util.*

class MainApplication : Application(), ReactApplication {

    private val mReactNativeHost: ReactNativeHost = object : ReactNativeHost(this) {
        override val isDebug: Boolean
            get() = BuildConfig.DEBUG

        override fun getPackages(): List<ReactPackage> {
            return Arrays.asList(
                // Add your custom packages here
                IntuactivePackage()  // Replace with your actual package name
            )
        }

        override fun getJSMainModuleName(): String {
            return "index"
        }
    }

    override fun getReactNativeHost(): ReactNativeHost {
        return mReactNativeHost
    }

    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this, /* native exopackage */ false)
    }
}
