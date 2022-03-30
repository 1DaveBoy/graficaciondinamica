
      google.charts.load('current', {'packages':['corechart']});//Tipo de gráfica 

      
      google.charts.setOnLoadCallback(dibujargrafica1);//comuicacion asicrona 

      function dibujargrafica1() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Champiñones', 5 ],
          ['Cebolla', 1],
          ['Aceitunas', 1],
          ['Zucchini', 1],
          ['Pepperoni', 2],
          ['Tortillas', 3],
          ['Frijoles', 1]
        ]);

        // Set chart options
        var options = {'title':'Cuanta pizza comiste en la noche'};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('grafica1'));
        chart.draw(data, options);
      }
      google.charts.load('current', {
        'packages':['geochart'],
      });

    //grafica 2
    
    
    google.charts.setOnLoadCallback(dibujargrafica2);

      function dibujargrafica2() {
        var data = google.visualization.arrayToDataTable([
          ['Dinosaur', 'Length'],
          ['Acrocanthosaurus (top-spined lizard)', 12.2],
          ['Albertosaurus (Alberta lizard)', 9.1],
          ['Allosaurus (other lizard)', 12.2],
          ['Apatosaurus (deceptive lizard)', 22.9],
          ['Archaeopteryx (ancient wing)', 0.9],
          ['Argentinosaurus (Argentina lizard)', 36.6],
          ['Baryonyx (heavy claws)', 9.1],
          ['Brachiosaurus (arm lizard)', 30.5],
          ['Ceratosaurus (horned lizard)', 6.1],
          ['Coelophysis (hollow form)', 2.7],
          ['Compsognathus (elegant jaw)', 0.9],
          ['Deinonychus (terrible claw)', 2.7],
          ['Diplodocus (double beam)', 27.1],
          ['Dromicelomimus (emu mimic)', 3.4],
          ['Gallimimus (fowl mimic)', 5.5],
          ['Mamenchisaurus (Mamenchi lizard)', 21.0],
          ['Megalosaurus (big lizard)', 7.9],
          ['Microvenator (small hunter)', 1.2],
          ['Ornithomimus (bird mimic)', 4.6],
          ['Oviraptor (egg robber)', 1.5],
          ['Plateosaurus (flat lizard)', 7.9],
          ['Sauronithoides (narrow-clawed lizard)', 2.0],
          ['Seismosaurus (tremor lizard)', 45.7],
          ['Spinosaurus (spiny lizard)', 12.2],
          ['Supersaurus (super lizard)', 30.5],
          ['Tyrannosaurus (tyrant lizard)', 15.2],
          ['Ultrasaurus (ultra lizard)', 30.5],
          ['Velociraptor (swift robber)', 1.8]]);

        var options = {
          title: 'Longitudes de dinosaurios, en metros',
          legend: { position: 'none' },
        };

        var chart = new google.visualization.Histogram(document.getElementById('grafica2'));
        chart.draw(data, options);
      }

      //grafica 3

      google.charts.setOnLoadCallback(dibujargrafica3);

      function dibujargrafica3() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['Germany', 200],
          ['United States', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 700]
        ]);

        var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('grafica3'));

        chart.draw(data, options);
      }

      //grafica 4

      google.charts.setOnLoadCallback(dibujargrafica4);

      function dibujargrafica4() {
  
        var data = google.visualization.arrayToDataTable([
          ['ID', 'Life Expectancy', 'Fertility Rate', 'Region',     'Population'],
          ['CAN',    80.66,              1.67,      'North America',  33739900],
          ['DEU',    79.84,              1.36,      'Europe',         81902307],
          ['DNK',    78.6,               1.84,      'Europe',         5523095],
          ['EGY',    72.73,              2.78,      'Middle East',    79716203],
          ['GBR',    80.05,              2,         'Europe',         61801570],
          ['IRN',    72.49,              1.7,       'Middle East',    73137148],
          ['IRQ',    68.09,              4.77,      'Middle East',    31090763],
          ['ISR',    81.55,              2.96,      'Middle East',    7485600],
          ['RUS',    68.6,               1.54,      'Europe',         141850000],
          ['USA',    78.09,              2.05,      'North America',  307007000]
        ]);
  
        var options = {
          title: 'Tasa de fecundidad vs esperanza de vida en países seleccionados (2010).',
          hAxis: {title: 'Life Expectancy'},
          vAxis: {title: 'Fertility Rate'},
          bubble: {textStyle: {fontSize: 11}}
        }; 
  
        var chart = new google.visualization.BubbleChart(document.getElementById('grafica4'));
        chart.draw(data, options);
      }

      //grafica 5


      google.charts.load("current", {packages:["timeline"]});
      google.charts.setOnLoadCallback(dibujargrafica5);
      function dibujargrafica5() {
    
       
        var chart = new google.visualization.Timeline(document.getElementById('grafica5'));
      

        var dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'Position' });
        dataTable.addColumn({ type: 'string', id: 'Name' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });
        dataTable.addRows([
          [ 'President', 'George Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
          [ 'President', 'John Adams', new Date(1797, 2, 4), new Date(1801, 2, 4) ],
          [ 'President', 'Thomas Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4) ],
          [ 'Vice President', 'John Adams', new Date(1789, 3, 21), new Date(1797, 2, 4)],
          [ 'Vice President', 'Thomas Jefferson', new Date(1797, 2, 4), new Date(1801, 2, 4)],
          [ 'Vice President', 'Aaron Burr', new Date(1801, 2, 4), new Date(1805, 2, 4)],
          [ 'Vice President', 'George Clinton', new Date(1805, 2, 4), new Date(1812, 3, 20)],
          [ 'Secretary of State', 'John Jay', new Date(1789, 8, 25), new Date(1790, 2, 22)],
          [ 'Secretary of State', 'Thomas Jefferson', new Date(1790, 2, 22), new Date(1793, 11, 31)],
          [ 'Secretary of State', 'Edmund Randolph', new Date(1794, 0, 2), new Date(1795, 7, 20)],
          [ 'Secretary of State', 'Timothy Pickering', new Date(1795, 7, 20), new Date(1800, 4, 12)],
          [ 'Secretary of State', 'Charles Lee', new Date(1800, 4, 13), new Date(1800, 5, 5)],
          [ 'Secretary of State', 'John Marshall', new Date(1800, 5, 13), new Date(1801, 2, 4)],
          [ 'Secretary of State', 'Levi Lincoln', new Date(1801, 2, 5), new Date(1801, 4, 1)],
          [ 'Secretary of State', 'James Madison', new Date(1801, 4, 2), new Date(1809, 2, 3)]
        ]);
    
        chart.draw(dataTable);
      }

      //Grafica6 

      google.charts.setOnLoadCallback(dibujargrafica6);

      function dibujargrafica6() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2013',  1000,      400],
          ['2014',  1170,      460],
          ['2015',  660,       1120],
          ['2016',  1030,      540]
        ]);

        var options = {
          title: 'Compañia ',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('grafica6'));
        chart.draw(data, options);
      }