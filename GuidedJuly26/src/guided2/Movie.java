package guided2;

public class Movie {
	
	
	public String name;
	public String directorName;
	public String duration;
	public int releasedYear;

	
	


	public Movie(String name, String directorName, String duration, int releasedYear) {
		super();
		this.name = name;
		this.directorName = directorName;
		this.duration = duration;
		this.releasedYear = releasedYear;
	}


	public Movie() {
		super();
		// TODO Auto-generated constructor stub
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getDirectorName() {
		return directorName;
	}


	public void setDirectorName(String directorName) {
		this.directorName = directorName;
	}


	public String getDuration() {
		return duration;
	}


	public void setDuration(String duration) {
		this.duration = duration;
	}


	public int getReleasedYear() {
		return releasedYear;
	}


	public void setReleasedYear(int releasedYear) {
		this.releasedYear = releasedYear;
	}


	@Override
	public String toString() {
		return "movie:" + name ;
	}
	
	
}
