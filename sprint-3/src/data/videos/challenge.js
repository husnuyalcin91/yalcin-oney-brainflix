const years = [
    {
      birth_year: 1992,
      death_year: 2000
    },
    {
      birth_year: 1990,
      death_year: 2000
    },
    {
      birth_year: 1991,
      death_year: 1999
    },
    {
      birth_year: 1993,
      death_year: 1995
    },
    {
      birth_year: 1994,
      death_year: 1996
    },
    {
      birth_year: 1997,
      death_year: 1998
    },
    {
      birth_year: 1998,
      death_year: 1999
    },
    {
      birth_year: 1996,
      death_year: 1998
    },
    {
      birth_year: 1996,
      death_year: 1999
    },
    {
      birth_year: 1992,
      death_year: 1998
    }
  ];

  noOfYears = () => {
      years.map(() => {
          (years.death_year - years.birth_year);
      })
  };

  console.log(noOfYears());