import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

function Sorts({}) {
  return (
    <div className="flex gap-2">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="პერიოდი" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1h">1 საათი</SelectItem>
          <SelectItem value="3h">3 საათი</SelectItem>
          <SelectItem value="6h">6 საათი</SelectItem>
          <SelectItem value="12h">12 საათი</SelectItem>
          <SelectItem value="24h">24 საათი</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="1">
        <SelectTrigger  className="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">თარიღი კლებადი</SelectItem>
          <SelectItem value="2">თარიღი ზრდადი</SelectItem>
          <SelectItem value="3">ფასი კლებადი</SelectItem>
          <SelectItem value="4">ფასი ზრდადი</SelectItem>
          <SelectItem value="5">გარბენი კლებადი</SelectItem>
          <SelectItem value="6">გარბენი ზრდადი</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default Sorts;
