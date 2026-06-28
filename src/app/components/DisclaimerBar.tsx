import Link from "next/link";

export default function DisclaimerBar() {
  return (
    <div className="w-full bg-black/40 border-y border-white/5 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center bg-red-600 text-white font-bold rounded-full text-xs">18+</span>
            <span className="font-bold text-white uppercase tracking-wider text-sm">Apenas para adultos (+18).</span>
          </div>
          
          <p className="text-xs text-white/40 max-w-3xl">
            Apostar deve ser uma atividade de lazer. Jogue com responsabilidade. Se precisar de ajuda, contacte a <Link href="https://www.sicad.pt/" className="text-primary hover:underline" target="_blank">Linha Vida (SICAD)</Link> através do número 1414.
          </p>
          
          <div className="text-[10px] text-white/20 uppercase tracking-widest font-bold">
            Regulado pelo SRIJ
          </div>
        </div>
      </div>
    </div>
  );
}
