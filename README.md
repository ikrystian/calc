Yup, another js calculator.

Jak uruchomić skrypt?
Po prostu wrzuc wszystkie pliki na serwer obslugujacy php, jezeli chcesz uruchomic to lokalnie polecam przez polecenie "php -S localhost:666"

Czego brakuje?
Na skrypt poswiecilem tylko ponad 2h wiec brakuje kilku rzeczy:
- przycisk dzielenia zamiast takiego jak na projekcie jest /
- przycisk mnozenia zamiast takiego jak na projekcie jest *

Jest to oczywiscie dosc latwe do naprawienia, dla uproszczenia kodu zostawilbym to tak, natomiast dodal klase do tych przyciskow ktora ukryje prawdziwa tresc a zastapi ja odpowiednim znakiem przez selector after badz before

- dodalbym mozliwosc tlumaczen komunikatow (w przypadku pluginu wordpressa)

W kalkulatorze mozna obsluzyc wiecej wyjatkow takich jak:
Przekroczenie zakresu: Jeśli używasz typów danych o ograniczonym zakresie (np. liczby całkowite), istnieje ryzyko przekroczenia zakresu podczas wykonywania operacji. Warto sprawdzić i obsłużyć tę sytuację.

Błędne wyrażenie matematyczne: Jeśli użytkownik wprowadzi nieprawidłowe wyrażenie matematyczne (np. "2 + * 3"), warto obsłużyć ten przypadek i dostarczyć odpowiednią informację zwrotną.

Inne błędy wejścia: Warto również rozważyć obsługę innych błędów wejścia, takich jak próba wprowadzenia litery zamiast liczby, bądź inne nieprawidłowe dane.

Błędy związane z pamięcią: W bardzo skomplikowanych kalkulatorach, które mogą przechowywać historię obliczeń, warto rozważyć obsługę błędów związanych z pamięcią (np. brak pamięci).

Jezeli chcialbym dodac to jako czesc wordpressa napisalbym kod w reactjs i wtawil to jako custom block.

Nie uzywalem niczegoo do budowania JS and scss - do celow jakie byly postawione obecne rozwiazania sa jak najbardziej ok.

