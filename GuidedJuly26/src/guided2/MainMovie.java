package guided2;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class MainMovie {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Movie movie1 = new Movie("Vandanam","Priyadarshan", "2:30:25",1989);
		Movie movie2 = new Movie("Lucifer","Prithviraj","2:45:20",2019);
		Movie movie3 = new Movie("Midhunam","Priyadarshan","2:15:45",1993);
		Movie movie4 = new Movie("Hridhayam","Vineeth Sreenivasan","2:50:15",2022);
		
		
		List<Movie> movieList = new ArrayList<Movie>();
		
		movieList.add(movie1);
		movieList.add(movie2);
		movieList.add(movie3);
		movieList.add(movie4);
		
		
		
		Map<String,List<Movie>> movies = movieList.stream().collect(Collectors.groupingBy(o -> o.directorName));
				
//				new HashMap<String,List<Movie>>();
//		
//		for(Movie m: movieList) {
//			String key = m.directorName;
//			if(!movies.containsKey(key))
//				movies.put(key, new ArrayList<Movie>());
//			movies.get(key).add(m);
//		}
		
		System.out.println(movies);
		

	}

}
