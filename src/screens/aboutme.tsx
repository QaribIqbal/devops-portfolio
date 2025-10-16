import Lanyard from "@/components/Lanyard";

function aboutme() {
    return (
    <div  className="flex flex-col items-center  w-full min-h-[100vh] overflow-hidden mt-0 lg pt-30">
<Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div>
    );
}

export default aboutme;