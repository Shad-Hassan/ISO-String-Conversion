// ISO String example
const exampleIsoTimeString = "2024-02-19T16:43:36.360Z"

// ISO String to Local Date object - Date(int)+ (th/ordinal suffix) + Month(string) + Year(int)
    const getDateString = () => {
        const isoDate = new Date(exampleIsoTimeString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = isoDate.toLocaleDateString('en-US', options);
    
        let [month, day, year] = formattedDate.split(' ');
    
        // Remove comma if present after the day
        day = day.replace(',', '');
    
        const getOrdinalSuffix = (day) => {
            if (day >= 11 && day <= 13) {
                return 'th';
            }
            switch (day % 10) {
                case 1: return 'st';
                case 2: return 'nd';
                case 3: return 'rd';
                default: return 'th';
            }
        }
        const ordinalSuffix = getOrdinalSuffix(day);
    
        return `${day}${ordinalSuffix} ${month} ${year}`;
    }
    
    const getTimeString = () => {
        const isoDate = new Date(exampleIsoTimeString);
        // Extract hours and minutes
        const hours = isoDate.getHours();
        const minutes = isoDate.getMinutes();

        // Format time
        return `${hours}:${minutes}`;

    }


    // incase you dont believe
    console.log("Date String:", getDateString(exampleIsoTimeString))
    console.log("Date String:", getTimeString(exampleIsoTimeString))

    // Type node IsoStringDateTime.js to run this code inside your VS code Terminal