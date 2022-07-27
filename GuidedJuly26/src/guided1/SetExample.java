package guided1;

import java.util.HashSet;
import java.util.Set;

public class SetExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Set<Integer> newSet1 = new HashSet<Integer>();
		
		Set<Integer> newSet2 = new HashSet<Integer>();
		
		newSet1.add(3);
		newSet1.add(6);
		newSet1.add(9);
		newSet1.add(12);
		newSet1.add(15);
		
		
		newSet2.add(2);
		newSet2.add(4);
		newSet2.add(6);
		newSet2.add(8);
		newSet2.add(10);
		newSet2.add(12);
		newSet2.add(14);
		
		
		newSet1.retainAll(newSet2);
		
		
		System.out.println(newSet1);
		
	}

}
