import * as ImGui from "./imgui/imgui.js";
import * as ImGui_Impl from "./imgui/imgui_impl.js";

async function main() {
  await ImGui.default();
  await ImGui_Impl.default();

  const canvas = document.getElementById("canvas");
  ImGui_Impl.Init(canvas);

  function loop(time) {
    ImGui_Impl.NewFrame(time);
    ImGui.NewFrame();

    ImGui.Begin("Hello, world!");
    ImGui.Text("This is ImGui running in WebAssembly!");
    ImGui.End();

    ImGui.Render();
    ImGui_Impl.RenderDrawData(ImGui.GetDrawData());

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}

main();
