const compsF = [
  {
    id: 1,
    name: "Open Fight",
    date: "2022-02-02",
    location: "São Paulo",
    participants: [
      {
        id: 1,
        name: "Isaac",
        award: "Ouro",
      },
      {
        id: 2,
        name: "Maria",
        award: "Ouro",
      },
    ],
  },
  {
    id: 1,
    name: "Open Fight",
    date: "2022-02-02",
    location: "São Paulo",
    participants: [
      {
        id: 1,
        name: "Isaac",
        award: "Ouro",
      },
      {
        id: 2,
        name: "Maria",
        award: "Ouro",
      },
    ],
  },
  {
    id: 1,
    name: "Open Fight",
    date: "2022-02-02",
    location: "São Paulo",
    participants: [
      {
        id: 1,
        name: "Isaac",
        award: "Ouro",
      },
      {
        id: 2,
        name: "Maria",
        award: "Ouro",
      },
    ],
  },
  {
    id: 1,
    name: "Open Fight",
    date: "2022-02-02",
    location: "São Paulo",
    participants: [
      {
        id: 1,
        name: "Isaac",
        award: "Ouro",
      },
      {
        id: 2,
        name: "Maria",
        award: "Ouro",
      },
    ],
  },
  {
    id: 1,
    name: "Open Fight",
    date: "2022-02-02",
    location: "São Paulo",
    participants: [
      {
        id: 1,
        name: "Isaac",
        award: "Ouro",
      },
      {
        id: 2,
        name: "Maria",
        award: "Ouro",
      },
    ],
  },
  {
    id: 1,
    name: "Open Fight",
    date: "2022-02-02",
    location: "São Paulo",
    participants: [
      {
        id: 1,
        name: "Isaac",
        award: "Ouro",
      },
      {
        id: 2,
        name: "Maria",
        award: "Ouro",
      },
    ],
  },
];

export function CompsCard() {
  return (
    <>
      {compsF.map((comp, index) => (
        <div
          key={index}
          className="bg-bg-primary flex flex-col items-center gap-2 rounded-lg p-4 text-base border-2 border-text1 md:w-[400px] w-[calc(100vh/2)]"
        >
          <h5>{comp.name}</h5>
          <p>{comp.date}</p>
          <p>{comp.location}</p>
          <div>
            {comp.participants &&
              comp.participants.map((participant, index) => (
                <div key={index} className="flex flex-col items-center">
                  <p>
                    {participant.name} {participant.award}
                  </p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
}
