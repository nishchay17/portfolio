import { Project } from "../../../interface/Project";
import { supabase } from "../../../lib/supabase";

export async function addProject(project: Project, file: File | null) {
  const { data, error } = await supabase.from("Project").insert([
    {
      name: project.name,
      description: project.description,
      github: project.github,
      live: project.live,
      tag: project.tag,
      image: file?.name,
    },
  ]);
  let fileUpload = {};
  if (file) {
    fileUpload = await supabase.storage.from("image").upload(file.name, file, {
      cacheControl: "3600",
      upsert: true,
    });
  }
  if (error) return [];
  else return data;
}

export async function deleteProject(id: string, image?: string) {
  const { data } = await supabase.from("Project").delete().match({ id });
  if (image) {
    await supabase.storage.from("image").remove([image]);
  }
  return data;
}
