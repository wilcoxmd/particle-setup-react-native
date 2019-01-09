#!/bin/bash

./gradlew ${1:-installDevMinSdkDevKernelDebug} --stacktrace && adb shell am start -n com.mattdwilcox.particlesetupreactnative/host.exp.exponent.MainActivity
