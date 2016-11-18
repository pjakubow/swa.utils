/**
     * Zwraca odpowiednią formę dla liczby
     *
     * Przykład użycia:
     *   getPlural(1, 'monet', 'monety', 'monet') // moneta
     *   getPlural(10, 'monet', 'monety', 'monet') // monet
     *   getPlural(1023, 'monet', 'monety', 'monet') // monety
     *
     * @param  {[type]} num ilość
     * @param  {[type]} f1  forma 1. np.(jeden) gołąb
     * @param  {[type]} f2  forma 2. np. (dwa) gołębie
     * @param  {[type]} f3  forma 3. np. (pięć) gołębi
     * @return {[type]}     odpowiednia forma
     */
var getPlural = function(num, f1, f2, f3) {
    
    if (num === 1) {
        return f1;
    }
    
    var mod = num % 100;
    
    if (mod > 4 && mod < 22) {
        return f3;
    }
    
    mod = num % 10;
    if (mod > 1 && mod < 5) {
        return f2;
    }
    
    return f3;
};
