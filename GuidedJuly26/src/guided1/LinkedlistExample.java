package guided1;

import java.util.Arrays;
import java.util.LinkedList;

public class LinkedlistExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		LinkedList<String> newList = new LinkedList<String>(Arrays.asList("Cat","Dog","Monkey"));
		
		LinkedList<String> sublist = new LinkedList<String>(Arrays.asList("Fish","Rabbit","Pig"));
		
		
		newList.addAll(sublist);
		
		System.out.println("After appending the list: "+newList);
		
		newList.addFirst("Hen");
		
		System.out.println("After adding an element to first index: " + newList);
		
		newList.addLast("Parrot");
		
		System.out.println("After adding an element to last index: " +newList);
		
		for(String num: newList)
			System.out.println("Index of " + num + " : " + newList.indexOf(num));
	
		System.out.println("Using peekFirst: " + newList.peekFirst());
		
	
		System.out.println("Using peekLast: " + newList.peekLast());
		
		System.out.println("Removed using pollFirst: " +newList.pollFirst());
		
		System.out.println("Removed using pollLast: " + newList.pollLast());
		
		System.out.println("Size of the list: " + newList.size());
		
		
	}

}
