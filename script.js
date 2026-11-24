function normalizeUnits(manifest) {
  if (manifest.unit === "lb") {
    return {
      ...manifest,
      weight: Number((manifest.weight * 0.45).toFixed(2)),
      unit: "kg"
    };
  }
  return { ...manifest }
}

function validateManifest(manifest) {
  const errors = {}

  if (!manifest.hasOwnProperty("containerId")) {
    errors.containerId = "Missing";
  } else if (
    typeof manifest.containerId !== "number" || !Number.isInteger(manifest.containerId) || manifest.containerId <= 0
  ) {
    errors.containerId= "Invalid";
  }

  if (!manifest.hasOwnProperty("destination")) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" || manifest.destination.trim().length === 0
  ) {
    errors.destination= "Invalid";
  }

  if (!manifest.hasOwnProperty("weight")) {
    errors.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" || !Number.isFinite(manifest.weight) || manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  if (!manifest.hasOwnProperty("unit")) {
    errors.unit = "Missing";
  } else if (
    manifest.unit !== "kg" &&
    manifest.unit !== "lb"
  ) {
    errors.unit = "Invalid";
  }

  if (!manifest.hasOwnProperty("hazmat")) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
  let errors = validateManifest(manifest);
  let errorKeys = Object.keys(errors);

  if (errorKeys.length === 0) {
    let updatedManifest = normalizeUnits(manifest);
    console.log("Validation success: " + updatedManifest.containerId)
    console.log("Total weight: " + updatedManifest.weight + " " + updatedManifest.unit)
  } else {
    console.log("Validation error: " + manifest.containerId);
    console.log(errors)
  }
}