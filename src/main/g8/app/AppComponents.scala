import play.api.ApplicationLoader.Context
import play.api.BuiltInComponentsFromContext
import play.api.routing.Router
import controllers._
import router.Routes
import scala.concurrent.duration._
import play.api.libs.ws.ahc.AhcWSComponents
import play.api.libs.concurrent.Execution.Implicits._

class AppComponents(context: Context)
    extends BuiltInComponentsFromContext(context)
      with AhcWSComponents {

  val applicationController = new Application
  val healthcheckController = new Healthcheck
  val assets = new Assets(httpErrorHandler)
  val router: Router = new Routes(httpErrorHandler, applicationController, healthcheckController, assets)
}