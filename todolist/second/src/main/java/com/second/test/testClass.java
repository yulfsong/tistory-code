package com.second.test;

public class testClass {

	public static void main(String[] args) {
		
		String a = "10";
		String b = "20";
		String c = "30";
		String d = "40";
		
		int sum = Integer.valueOf(a) + Integer.valueOf(b)
		+ Integer.valueOf(c) + Integer.valueOf(d);
		
		
		
		
		String x = "1, 2, 3, 4, 5";
		
		String test1 = x.substring(9,10);
		String test2 = x.substring(6,7);
		String test3 = x.substring(12,13);
		String test4 = x.substring(0,1);
		
		String test5 = test1+test2+test3+test4;
		
		
		
		String f = "123test456TEST789test101112TEST";
		String g = "test";
		
		int num = 0;
		
		/*for(int i=0; i<f.length(); i++) {
			if(f.charAt(i) == g) {			
				num++;
				System.out.println("포함");
			}
		}
		System.out.println(num);*/

	}

}
