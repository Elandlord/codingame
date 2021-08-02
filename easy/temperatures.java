import java.util.*;
import java.io.*;
import java.math.*;

class Solution {

    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();

        int number = 0;
        int lowestDistance = 5526;

        for (int i = 0; i < n; i++) {
            int t = in.nextInt();

            if(Math.abs(t) == lowestDistance && n != 2) {
                number = Math.abs(t);
            }

            if(Math.abs(t) < lowestDistance) {
                lowestDistance = Math.abs(t);
                number = t;
            }
        }

        System.out.println(number);
    }
}