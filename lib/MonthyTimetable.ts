export interface MonthlyTimetable {
    [key: string]: {
        Day: string;
        IslamicDate: string;
        IslamicMonth: string;
        FajrBeg: string;
        FajrAzan: string;
        Sunrise: string;
        ZawalBeg: string;
        ZoharBeg: string;
        ZoharJumaAzan: string;
        AsarBeg: string;
        AsarAzan: string;
        MagribAzan: string;
        IshaAzan: string;
    };
};