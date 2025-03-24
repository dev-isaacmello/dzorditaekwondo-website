import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function LoginAlert() {
  return (
    <div className="text-center">
      <AlertDialog>
        <AlertDialogTrigger className="cursor-pointer">SUPORTE</AlertDialogTrigger>
        <AlertDialogContent className="bg-base text-text2 w-[calc(100vw/1.5)]">
          <AlertDialogHeader>
            <AlertDialogTitle>Você será redirecionado para o Whatsapp</AlertDialogTitle>
            <AlertDialogDescription>
              Caso queira prosseguir, envie uma mensagem no chat que sera aberto explicando sua dúvida!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="cursor-pointer hover:bg-gray-200 hover:text-text2">Voltar</AlertDialogCancel>
            <AlertDialogAction className="text-base cursor-pointer hover:bg-blue-600"><a href="https://wa.me/5551995894049" target="_blank">Continuar</a></AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
