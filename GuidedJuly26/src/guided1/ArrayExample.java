package guided1;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

public class ArrayExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		List<String> newList = new ArrayList<String>(Arrays.asList("C","C++","Java","Python"));
		
		System.out.println("Size of the ArrayList: " + newList.size());
		
		System.out.println("ArrayList isEmpty: " + newList.isEmpty());
		
		for(int i=0;i<newList.size();i++)
			System.out.println("ArrayList at index " + i + ": " + newList.get(i));
		
		newList.set(3, "Python3");
		System.out.println("List after changes: " + newList);
		
//		newList.add("R");
//		newList.add("MySQL");
//		newList.add("save");
//		newList.add("vase");
		
		List<String> newList1 = new ArrayList<String>(Arrays.asList("R","MySQL","save","vase"));
		
		newList.addAll(newList1);
		
		System.out.println("After appending the list: " + newList);	
		
		System.out.println("Anagrams in the list: "+ CheckAnagram(newList));
		

	}
	
	public static LinkedList<String> CheckAnagram(List<String> newList) {
		LinkedList<String> result = new LinkedList<String>();
		Map<String, LinkedList<String>> anagrams = new HashMap<>();
		for(String word: newList) {
			char[] wordChar = word.toCharArray();
			Arrays.sort(wordChar);
			String sorted = new String(wordChar);
			
			LinkedList<String> anagramList = anagrams.get(sorted);
			
			System.out.println(anagramList);
			
			if(anagramList == null)
				anagrams.put(sorted, anagramList = new LinkedList<>());
			
			anagramList.add(word);
		}
		
		for(String str1: anagrams.keySet()) {
			if(anagrams.get(str1).size() > 1)
				result.addAll(anagrams.get(str1));
		}
		
		return result;	
	}

}
