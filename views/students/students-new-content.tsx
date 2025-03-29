import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { GraduationCap, LibraryBig, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { StudentInput } from "./students";
import { useState } from "react";
import { RouteMap } from "@/routes/route-map";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { PageTitle } from "@/components/page-title/page-title";
import { createStudent } from "@/views/students/students-service";
import { toast } from "sonner";

export function StudentsNewContent() {
  const t = useTranslations("agentFirstRegister");
  const [loading, setLoading] = useState<boolean>(false);
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentInput>();

  const onSubmit = (data: StudentInput) => {
    setLoading(true);
    createStudent(data).then(res => push(`${RouteMap.students}/${res.id}`))
      .catch(err => toast.error("Inserindo aluno", {
        description: "Algo inesperado aconteceuu. Tente novamente!",
        icon: '❌',
        classNames: {
          description: '!text-red-800',
        }
      }))
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex flex-col space-y-8 items-center">
      <div className="space-y-8 w-2/3">
        <PageTitle title={t("title")} backButtonUrl={RouteMap.students} />
        {/* Tutorial Link */}
        <Alert variant="default" className="flex items-center">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-5 w-5 text-info-foreground" />
            <div>
              <span className="text-muted-foreground">{t("description")} </span>
              <Link href="/tutorials" className="text-info-foreground hover:underline font-medium">
                {t("tutorialButtonLabel")}
              </Link>
            </div>
          </div>
        </Alert>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Dados básicos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Nome */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-muted-foreground font-medium">
                Nome
              </label>
              <Input
                id="name"
                {...register("name", { required: "Campo obrigatório" })}
                placeholder="Nome completo"
                className="h-12"
              />
            </div>

            {/* Data de nascimento */}
            <div className="space-y-2">
              <label htmlFor="birthDate" className="text-sm text-muted-foreground font-medium">
                Data de nascimento
              </label>
              <Input
                id="birthDate"
                type="date"
                {...register("birthDate", { required: "Campo obrigatório" })}
                className="h-12"
              />
            </div>

            {/* Documento */}
            <div className="space-y-2">
              <label htmlFor="document" className="text-sm text-muted-foreground font-medium">
                Documento
              </label>
              <Input
                id="document"
                {...register("document", { required: "Campo obrigatório" })}
                placeholder="CPF ou outro"
                className="h-12"
              />
            </div>

            {/* Matrícula */}
            <div className="space-y-2">
              <label htmlFor="registrationNumber" className="text-sm text-muted-foreground font-medium">
                Matrícula
              </label>
              <Input
                id="registrationNumber"
                {...register("registrationNumber", { required: "Campo obrigatório" })}
                className="h-12"
              />
            </div>

            {/* Filiação */}
            <div className="space-y-2">
              <label htmlFor="filiation" className="text-sm text-muted-foreground font-medium">
                Filiação
              </label>
              <Input
                id="filiation"
                {...register("filiation", { required: "Campo obrigatório" })}
                className="h-12"
              />
            </div>

            {/* Contato */}
            <div className="space-y-2">
              <label htmlFor="contact" className="text-sm text-muted-foreground font-medium">
                Contato
              </label>
              <Input
                id="contact"
                {...register("contact", { required: "Campo obrigatório" })}
                placeholder="(22) 99999-9999"
                className="h-12"
              />
            </div>

            {/* Turno */}
            <div className="space-y-2">
              <label htmlFor="shift" className="text-sm text-muted-foreground font-medium">
                Turno
              </label>
              <select
                id="shift"
                {...register("shift", { required: "Campo obrigatório" })}
                className="h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="">Selecione</option>
                <option value="manha">Manhã</option>
                <option value="tarde">Tarde</option>
                <option value="noite">Noite</option>
              </select>
            </div>

            {/* Tipo sanguíneo */}
            <div className="space-y-2">
              <label htmlFor="bloodType" className="text-sm text-muted-foreground font-medium">
                Tipo Sanguíneo
              </label>
              <Input
                id="bloodType"
                {...register("bloodType", { required: "Campo obrigatório" })}
                placeholder="Ex: A+"
                className="h-12"
              />
            </div>

            {/* Escola */}
            <div className="space-y-2">
              <label htmlFor="school" className="text-sm text-muted-foreground font-medium">
                Escola
              </label>
              <Input
                id="school"
                {...register("school", { required: "Campo obrigatório" })}
                className="h-12"
              />
            </div>

            {/* Endereço */}
            <div className="space-y-2 col-span-full">
              <label htmlFor="address" className="text-sm text-muted-foreground font-medium">
                Endereço
              </label>
              <Input
                id="address"
                {...register("address", { required: "Campo obrigatório" })}
                className="h-12"
              />
            </div>

            {/* Esportes (seleção múltipla, adaptável) */}
            <div className="space-y-2 col-span-full">
              <label htmlFor="sports" className="text-sm text-muted-foreground font-medium">
                Esportes
              </label>
              <select
                multiple
                id="sports"
                {...register("sports", { required: "Campo obrigatório" })}
                className="h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="1">Futebol</option>
                <option value="2">Basquete</option>
                <option value="3">Vôlei</option>
                <option value="4">Natação</option>
              </select>
              <p className="text-xs text-muted-foreground">Segure Ctrl (Windows) ou Cmd (Mac) para selecionar múltiplos</p>
            </div>
          </div>

          {/* Botão de envio */}
          <Button type="submit" disabled={loading} className="disabled:bg-slate-500">
            {loading ? <LoaderCircle className="animate-spin" /> : "Salvar"}
          </Button>
        </form>

      </div>
    </div>
  );
}
