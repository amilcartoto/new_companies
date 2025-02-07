"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlusCircle, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Company {
  id: string;
  name: string;
  description: string | null;
  logo: string | null;
  website: string | null;
  createdAt: Date;
}

export function CompanyList() {
  const [companies, setCompanies] = useState<Company[]>([
    // Datos de ejemplo - esto luego vendrá de la base de datos
    {
      id: "1",
      name: "Empresa Demo",
      description: "Una descripción de ejemplo",
      logo: null,
      website: "https://ejemplo.com",
      createdAt: new Date(),
    },
  ]);

  const [newCompany, setNewCompany] = useState<Partial<Company>>({
    name: "",
    description: "",
    website: "",
  });

  const handleAddCompany = () => {
    if (newCompany.name) {
      setCompanies([...companies, {
        id: (companies.length + 1).toString(),
        name: newCompany.name || "",
        description: newCompany.description || null,
        logo: null,
        website: newCompany.website || null,
        createdAt: new Date(),
      }]);
      setNewCompany({ name: "", description: "", website: "" });
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col space-y-4 p-4 sm:p-6">
        <CardTitle>Empresas</CardTitle>
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            placeholder="Nombre de la Empresa"
            value={newCompany.name || ""}
            onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Descripción"
            value={newCompany.description || ""}
            onChange={(e) => setNewCompany({ ...newCompany, description: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Sitio Web"
            value={newCompany.website || ""}
            onChange={(e) => setNewCompany({ ...newCompany, website: e.target.value })}
            className="border p-2 rounded"
          />
          <Button onClick={handleAddCompany} size="sm">
            <PlusCircle className="mr-2 h-4 w-4" />
            Agregar Empresa
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0 sm:p-6">
        <div className="w-full overflow-auto">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">Logo</TableHead>
                  <TableHead>Nombre</TableHead>
                  <TableHead className="hidden md:table-cell">Descripción</TableHead>
                  <TableHead className="hidden sm:table-cell">Sitio Web</TableHead>
                  <TableHead className="hidden lg:table-cell">Fecha</TableHead>
                  <TableHead className="w-[100px] text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {companies.map((company) => (
                  <TableRow key={company.id}>
                    <TableCell>
                      {company.logo ? (
                        <img
                          src={company.logo}
                          alt={`${company.name} logo`}
                          className="h-8 w-8 rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                          <span className="text-sm font-semibold">
                            {company.name[0]}
                          </span>
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="font-medium max-w-[120px] truncate">
                      {company.name}
                    </TableCell>
                    <TableCell className="hidden md:table-cell max-w-[200px] truncate">
                      {company.description}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {company.website && (
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline truncate block max-w-[150px]"
                        >
                          {company.website}
                        </a>
                      )}
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      {company.createdAt.toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}