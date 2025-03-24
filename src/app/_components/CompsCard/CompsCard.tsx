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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
          className="bg-base shadow-lg border-text1 flex w-[calc(100vw/1.5)] flex-col items-center gap-2 rounded-lg border-2 p-4 md:w-[400px]"
        >
          <h5 className="font-bold text-2xl">{comp.name}</h5>
          <p className="text-gray-400">{comp.date}</p>
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
