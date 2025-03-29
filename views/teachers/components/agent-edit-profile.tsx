import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoaderCircle } from "lucide-react";

interface IStudentEditProfileProps {
  name: string;
  email: string;
  loading: boolean;
  openEditModal: boolean;
  closeEditModal: (value: boolean) => void;
  onSave: (updatedData: { name: string; email: string }) => void;
}

export function TeachersEditProfile({ name, email, onSave, loading, openEditModal, closeEditModal }: IStudentEditProfileProps) {
  const [editedName, setEditedName] = useState(name);
  const [isEmail, setIsEmail] = useState(email);

  const handleSave = () => {
    onSave({ name: editedName, email: isEmail });
  };

  return (
    <Dialog open={openEditModal} onOpenChange={closeEditModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar perfil</DialogTitle>
          <DialogDescription>
            Faça alterações no perfil e clique em salvar quando terminar.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input
              id="name"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="handle" className="text-right">
              Idade
            </Label>
            <Input
              id="handle"
              value={isEmail}
              onChange={(e) => setIsEmail(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSave} disabled={loading} className="disabled:bg-esporte-purple/80">
            {loading ? <LoaderCircle className="animate-spin" /> : "Salvar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
