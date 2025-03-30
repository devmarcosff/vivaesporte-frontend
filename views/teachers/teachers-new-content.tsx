import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { GraduationCap, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { TeachersInput } from "./teachers";
import { useState } from "react";
import { RouteMap } from "@/routes/route-map";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { PageTitle } from "@/components/page-title/page-title";
import { createStudent } from "@/views/students/students-service";
import { toast } from "sonner";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PasswordInput } from "@/components/password-input";
import { createTeachers } from "./teachers-service";

export function TeachersNewContent() {
  const t = useTranslations("agentFirstRegister");
  const [loading, setLoading] = useState<boolean>(false);
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TeachersInput>();

  const onSubmit = (data: TeachersInput) => {
    setLoading(true);
    data.email = `${data.email}@stevanini.com.br`;
    createTeachers(data).then(res => push(`${RouteMap.teachers}`))
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
      <div className="space-y-8 w-full lg:w-2/3">
        <PageTitle title="Novo Professor" description="Preencha os formulários e cadastre um novo professor." backButtonUrl={RouteMap.teachers} />
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
          {/* Basic Datas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* name */}
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
            {/* email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-muted-foreground font-medium">
                E-mail
              </label>

              <div className="h-12 flex items-center bg-background rounded-md border px-3 group focus-within:border-esporte-soft-purple">
                <Input
                  id="email"
                  {...register("email", { required: "Campo obrigatório" })}
                  placeholder="E-mail do professor"
                  className="flex-1 px-0 h-full border-none bg-transparent outline-none text-foreground placeholder:text-muted-foreground focus:border-none"
                />
                <span className="text-muted-foreground ml-1">@stevanini.com.br</span>
              </div>
            </div>
            {/* role */}
            <div className="space-y-2">
              <label htmlFor="role" className="text-sm text-muted-foreground font-medium">
                Nível profissional
              </label>
              {/* <Select required value="PROFESSOR" onValueChange={() => setValue("role", 'PROFESSOR')}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o cargo do profissional" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="text-esporte-neutral-white text-start bg-esporte-soft-purple/50 rounded">TÉCNICO</SelectLabel>
                    <SelectItem value="PROFESSOR">Prefessor</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select> */}
              <Input
                id="role"
                {...register("role", { required: "Campo obrigatório" })}
                placeholder="Escolha o cargo do profissional"
                className="h-12"
                value={'PROFESSOR'}
                disabled
              />
            </div>
            {/* password */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm text-muted-foreground font-medium">
                Senha
              </label>
              <PasswordInput
                {...register("password", { required: "Campo obrigatório" })}
                placeholder="Nome completo"
                className="h-12"
              />
            </div>

          </div>

          {/* Button submit */}
          <Button type="submit" disabled={loading} className="disabled:bg-slate-500">
            {loading ? <LoaderCircle className="animate-spin" /> : "Salvar"}
          </Button>
        </form>

      </div>
    </div>
  );
}
