package main

import "fmt"

func main() {
    for {
        highestMountain := 0
        mountainIndex := 0

        for i := 0; i < 8; i++ {
            // mountainH: represents the height of one mountain.
            var mountainH int
            fmt.Scan(&mountainH)

            if mountainH > highestMountain {
                highestMountain = mountainH
                mountainIndex = i;
            }
        }

        fmt.Println(mountainIndex) // The index of the mountain to fire on.
    }
}