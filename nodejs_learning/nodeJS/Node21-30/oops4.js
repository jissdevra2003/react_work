class Movie
{
start()
{
console.log(`Directed by christopher nolan`);
}
interval()
{
console.log(`Cooper went to space leaving murph on earth`);
}
end()
{
console.log(`cooper comes back to earth but brand stays on another planet murph gets old`);
}

}
class Interstellar extends Movie
{
interval()
{
super.interval();
console.log(`there is another astronaut in the space with whom cooper and the crew meet`);
}
mission1()
{
console.log(`there is a 3rd dimension through which cooper talks to murph`);
}
mission2()
{
console.log(`cooper sends message to murph using books in the 3rd dimension`);
}
}
const tt=new Interstellar();
tt.start();
tt.mission1();

tt.interval();
tt.mission2();
tt.end();
